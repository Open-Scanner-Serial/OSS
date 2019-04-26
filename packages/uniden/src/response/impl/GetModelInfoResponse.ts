import { UnidenResponse } from "../UnidenResponse";

export enum UnidenModel {
  BCD436HP = "BCD436HP",
  BCD536HP = "BCD536HP",
  BR330T = "BR330T"
}

export class GetModelInfoResponse extends UnidenResponse {

  public isValid(): boolean {
    if (this.rawValues.length < 3) return false;

    const rawModel = this.rawValues[2];
    return Object.values(UnidenModel).includes(rawModel.trimRight());
  }

  public getModel(): UnidenModel {
    return this.rawValues[2] as UnidenModel;
  }

}