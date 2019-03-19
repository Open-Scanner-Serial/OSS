import { WhistlerCommand } from "../WhistlerCommand";
import { GenericResponse } from "../../response/impl/GenericResponse";

export enum SetCCDumpCommandStatus {
  On = 1,
  Off = 0
}

export class SetCCDumpCommand extends WhistlerCommand<GenericResponse> {

  private readonly status: SetCCDumpCommandStatus;

  constructor(status: SetCCDumpCommandStatus) {
    super();
    this.status = status;
  }


  public getBinaryInput(): Array<number> {
    return [0x43, this.status];
  }

  public getResponse(binaryOutput: Buffer): GenericResponse {
    return new GenericResponse(binaryOutput);
  }

}