import { UnidenResponse } from "../UnidenResponse";

export enum EnterProgramModeResponseStatus {
  Success = "OK",
  Error = "NG"
}

export class EnterProgramModeResponse extends UnidenResponse {

  public isValid(): boolean {
    return true;
  }

  public get success(): boolean {
    return false;
  }

  public get error(): null {
    return null;
  }
}