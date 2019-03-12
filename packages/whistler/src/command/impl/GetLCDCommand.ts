import { GetLCDResponse } from "../../response/impl/GetLCDResponse";
import { WhistlerCommand } from "../WhistlerCommand";

export class GetLCDCommand extends WhistlerCommand<GetLCDResponse> {

  public getBinaryInput(): Array<number> {
    return [0x4C];
  }

  public getResponse(binaryOutput: Array<number>): GetLCDResponse {
    return new GetLCDResponse(binaryOutput);
  }

}