import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class GetModelInfoCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.GetModelInfo);
  }

  protected getPayloadString(): string | null {
    return null;
  }

}