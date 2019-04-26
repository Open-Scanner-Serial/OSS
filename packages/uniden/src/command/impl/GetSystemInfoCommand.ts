import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class GetSystemInfoCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.GetSystemInfo);
  }

  protected getPayloadString(): null {
    return null;
  }
}