import { WhistlerCommand } from "../WhistlerCommand";
import { GenericResponse } from "../../response/impl/GenericResponse";

export class GetVersionCommand extends WhistlerCommand<GenericResponse> {

  public getBinaryInput(): Array<number> {
    return [0x56, 0x00];
  }

  public getResponse(binaryOutput: Buffer): GenericResponse {
    return new GenericResponse(binaryOutput);
  }

}