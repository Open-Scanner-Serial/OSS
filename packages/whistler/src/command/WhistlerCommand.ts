import { WhistlerDeviceKey } from "../constants/WhistlerDeviceKey";
import { WhistlerResponse } from "../response/WhistlerResponse";

export abstract class WhistlerCommand<R extends WhistlerResponse> {

  constructor() {
  }

  public abstract getBinaryInput(): Array<number>;
  public abstract getResponse(binaryOutput: Buffer): R;

}