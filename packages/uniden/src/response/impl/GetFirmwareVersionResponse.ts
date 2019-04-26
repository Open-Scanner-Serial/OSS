import { UnidenResponse } from "../UnidenResponse";

export class GetFirmwareVersionResponse extends UnidenResponse {

  public isValid(): boolean {
    if (this.rawValues.length < 3) return false;
    return true;
  }

  public getVersion() {
    return this.rawValues[2].trimRight();
  }
}