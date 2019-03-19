export class WhistlerResponse {

  protected readonly binaryData: Buffer;

  constructor(binaryData: Buffer) {
    this.binaryData = binaryData;
  }

}