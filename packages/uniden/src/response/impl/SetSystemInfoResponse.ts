import { UnidenResponse } from "../UnidenResponse";

export enum SetSystemInfoReponseStatus {
  Success = "OK",
  Error = "NG"
}

export class SetSystemInfoResponse extends UnidenResponse {

  public isValid(): boolean {
    return false;
  }

  public get success(): boolean {
    return false;
  }

}