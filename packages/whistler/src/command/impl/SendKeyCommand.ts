import { WhistlerCommand } from "../WhistlerCommand";

import { GenericResponse } from "../../response/impl/GenericResponse";

import { WhistlerDeviceKey } from "../../constants/WhistlerDeviceKey";

export class SendKeyCommand extends WhistlerCommand<GenericResponse> {

  private readonly button: WhistlerDeviceKey;

  constructor(button: WhistlerDeviceKey) {
    super();
    this.button = button;
  }

  public getBinaryInput(): Array<number> {
    return [0x4B, this.button];
  }

  public getResponse(binaryOutput: Buffer): GenericResponse {
    return new GenericResponse(binaryOutput);
  }

}