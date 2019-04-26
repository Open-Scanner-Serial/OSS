import convertXml from "xml-js";

import { UnidenResponse } from "../UnidenResponse";

export class GetScannerInfoResponse extends UnidenResponse {

  public isValid(): boolean {
    if (this.rawValues.length < 3 || this.rawValues[2].trimRight() !== "<XML>") return false;
    return true;
  }

  public get info(): any {
    if (this.rawValues.input) {
      const xml = this.rawValues.input.split(",")[2];
      return convertXml.xml2js(xml, { compact: true, ignoreDeclaration: true });
    }
    return null;
  }

}