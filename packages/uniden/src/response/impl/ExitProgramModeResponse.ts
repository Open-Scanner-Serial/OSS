import { UnidenResponse } from "../UnidenResponse";

export enum ExitProgramModeResponseStatus {
  Success = "OK",
}


export class ExitProgramModeResponse extends UnidenResponse {

  public isValid(): boolean {
    return false;
  }

  public get success(): boolean {
    return false;
  }

}