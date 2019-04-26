import SerialPort, { PortInfo } from "serialport";

// import { DeviceController } from "@open-scanner-serial/interface";

import { WhistlerCommand } from "../command/WhistlerCommand";
import { WhistlerResponse } from "../response/WhistlerResponse";
import { BinaryUtilities } from "../utilities/BinaryUtilities";

export class WhistlerDeviceController {

  private portInfo: SerialPort.PortInfo;
  private deviceConnection: SerialPort;

  private currentOutput?: Buffer;
  private currentCompleteCallback?: () => any;

  constructor(portInfo: PortInfo) {
    this.portInfo = portInfo;
    this.deviceConnection = new SerialPort(portInfo.comName, { baudRate: 15200, autoOpen: false });
  }

  public connect(): Promise<void> {
    return new Promise<void>(((resolve, reject) => {
      this.deviceConnection.once("open", () => {
        this.deviceConnection.removeAllListeners("open");
        resolve();
      });
      this.deviceConnection.open(error => reject(error));
    }));
  }

  /**
   * TODO: Checksum Logic
   */
  private listen(): void {
    this.deviceConnection.on("data", (data: Buffer) => {
      if (this.currentOutput) {
        this.currentOutput = Buffer.concat([this.currentOutput, data]);
      }
      else {
        this.currentOutput = data;
      }
    });
  }

  public disconnect(): Promise<void> {
    return new Promise<void>(((resolve, reject) => {
      this.deviceConnection.removeAllListeners("data");
      this.deviceConnection.once("close", () => resolve());
      this.deviceConnection.close(error => reject(error));
    }));
  }


  public issueCommand(command: WhistlerCommand<any>): Promise<WhistlerResponse> {
    return new Promise<WhistlerResponse>(((resolve, reject) => {
      try {
        if (!this.deviceConnection.isOpen) reject("Cannot issue command: connection not open");
        const binaryMessage = BinaryUtilities.getBinaryMessage(command.getBinaryInput());
        this.deviceConnection.write(binaryMessage, error => reject(error));

        this.currentCompleteCallback = () => {
          const output = this.currentOutput;

          this.currentOutput = undefined;
          this.currentCompleteCallback = undefined;

          resolve(command.getResponse(output));
        };
      }
      catch (e) {
        reject(e);
      }
    }))
  }

}