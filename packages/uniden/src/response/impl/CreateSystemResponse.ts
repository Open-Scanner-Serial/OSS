import { UnidenResponse } from "../UnidenResponse";

export class CreateSystemResponse extends UnidenResponse {

  public isValid(): boolean {
    if (this.rawValues.length < 3) return false;
    return true;
  }

  public getSystemID() {
    return this.rawValues[2].trimRight();
  }
}