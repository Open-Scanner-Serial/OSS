import { WhistlerCommand } from "../WhistlerCommand";
import { GenericResponse } from "../../response/impl/GenericResponse";

export class GoMenuCommand extends WhistlerCommand<GenericResponse> {

  public getBinaryInput(): Array<number> {
    return [0x4B, 17];
  }

  public getResponse(binaryOutput: Buffer): GenericResponse {
    return new GenericResponse(binaryOutput);
  }

}