import { UnidenResponse } from "../UnidenResponse";

export enum UserRecordControlResponseStatus {
  Success = "OK",
  Error = "ERR"
}

export enum UserRecordControlResponseError {
  FileAccessError = "0001",
  LowBattery = "0002",
  SessionOverLimit = "0003",
}

export class UserRecordControlResponse extends UnidenResponse {

  private _success?: boolean;
  private _error?: UserRecordControlResponseError;

  public isValid(): boolean {
    if (this.rawValues.length < 3) {
      return false;
    } else if (this.rawValues[2].trimRight() === "OK") {
      this._success = true;
      return true;
    } else if (this.rawValues[2].trimRight() === "ERR") {
      this._success = false;
      if (!Object.values(UserRecordControlResponseError).includes(this.rawValues[4])) {
        return false;
      }
      this._error = this.rawValues[4] as UserRecordControlResponseError;
      return true;
    } else {
      return false;
    }
  }

  public get success(): boolean {
    return this._success || false;
  }

  public get error(): UserRecordControlResponseError | null {
    return this._error || null;
  }


}