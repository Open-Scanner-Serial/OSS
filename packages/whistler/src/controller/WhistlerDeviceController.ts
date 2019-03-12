import SerialPort, { PortInfo } from "serialport";

import { DeviceController } from "@open-scanner-serial/interface";

import { WhistlerCommand } from "../command/WhistlerCommand";
import { WhistlerResponse } from "../response/WhistlerResponse";

export class WhistlerDeviceController implements DeviceController<WhistlerCommand<any>, WhistlerResponse> {

  private portInfo: SerialPort.PortInfo;
  private deviceConnection: SerialPort;

  private currentOutput?: Buffer;

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
    return null;
  }

}