import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class GetFirmwareVersionCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.GetFirmwareVersion);
  }

  protected getPayloadString(): string | null {
    return null;
  }

}