import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class GetScannerInfoCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.GetScannerInfo);
  }

  protected getPayloadString(): string | null {
    return null;
  }

}