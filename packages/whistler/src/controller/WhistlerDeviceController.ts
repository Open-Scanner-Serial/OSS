import { DeviceController } from "@open-scanner-serial/interface";

import { WhistlerCommand } from "../command/WhistlerCommand";
import { WhistlerResponse } from "../response/WhistlerResponse";

export class WhistlerDeviceController implements DeviceController<WhistlerCommand<any>, WhistlerResponse> {

  public connect(): Promise<void> {
    return null;
  }

  public disconnect(): Promise<void> {
    return null;
  }


  public issueCommand(command: WhistlerCommand<any>): Promise<WhistlerResponse> {
    return null;
  }

}