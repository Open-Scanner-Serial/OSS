import { EventEmitter } from "events";
import SerialPort, { PortInfo } from "serialport";
import { UnidenCommand } from "../command/UnidenCommand";
import { UnidenResponseParser } from "../parser/UnidenResponseParser";
import { UnidenResponse } from "../response/UnidenResponse";

enum InternalEvent {
  DataTerminator = "data-terminator"
}

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class UnidenDeviceController extends EventEmitter {

  public readonly portInfo: PortInfo;
  private readonly connection: SerialPort;

  private currentOutput: string;
  private currentOutputCallback?: () => any;

  constructor(portInfo: PortInfo) {
    super();

    this.portInfo = portInfo;
    this.connection = new SerialPort(portInfo.comName, { autoOpen: false, baudRate: 15200 });
    this.currentOutput = "";
  }

  public async connect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.connection.on("open", () => resolve());
      this.connection.open(error => reject(error));
    });
  }

  public listen(): void {
    this.on(InternalEvent.DataTerminator, () => {
      if (this.currentOutputCallback !== undefined) this.currentOutputCallback();
    });
    this.connection.on("data", (data: Buffer) => {
      const response = data.toString();
      this.currentOutput += response;
      if (response.endsWith("\r")) {
        this.emit(InternalEvent.DataTerminator);
      }
    });

  }

  public async issueCommand<R extends UnidenResponse>(command: UnidenCommand): Promise<R> {
    return new Promise<R>(((resolve, reject) => {
      if (!this.connection.isOpen) reject("Cannot issue command: connection not open");

      this.connection.write(command.toString(), error => {
        if (error) reject(error);
      });

      this.currentOutputCallback = () => {
        const response = this.currentOutput;

        this.currentOutput = "";
        this.currentOutputCallback = undefined;

        try {
          resolve(UnidenResponseParser.parse(response) as R);
        } catch (e) {
          reject(e);
        }
      };

    }));
  }

  public async disconnect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.removeAllListeners(InternalEvent.DataTerminator);
      this.connection.on("close", () => resolve());
      this.connection.close(error => reject(error));
    });
  }

}