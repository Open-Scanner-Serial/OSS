import { WhistlerDeviceKey } from "../constants/WhistlerDeviceKey";
import { WhistlerResponse } from "../response/WhistlerResponse";

export class WhistlerCommand<R extends WhistlerResponse> {

  protected readonly deviceKey: WhistlerDeviceKey;

  constructor(deviceKey: WhistlerDeviceKey) {
    this.deviceKey = deviceKey;
  }

}