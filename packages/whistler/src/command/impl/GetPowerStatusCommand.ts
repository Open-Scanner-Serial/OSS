import { WhistlerCommand } from "../WhistlerCommand";
import { GenericResponse } from "../../response/impl/GenericResponse";

export class GetPowerStatusCommand extends WhistlerCommand<GenericResponse> {

  public getBinaryInput(): Array<number> {
    return [0x61];
  }

  public getResponse(binaryOutput: Buffer): GenericResponse {
    return new GenericResponse(binaryOutput);
  }

}