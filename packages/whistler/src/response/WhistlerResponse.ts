export class WhistlerResponse {

  protected readonly binaryData: Array<number>;

  constructor(binaryData: Array<number>) {
    this.binaryData = binaryData;
  }

}