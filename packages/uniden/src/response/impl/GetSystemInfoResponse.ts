import { UnidenResponse } from "../UnidenResponse";

export class GetSystemInfoResponse extends UnidenResponse {


  public isValid(): boolean {
    if (this.rawValues.length < 3) return false;
    return true;
  }


  public getSystemInfo() {
    return this.rawValues;
  }

}