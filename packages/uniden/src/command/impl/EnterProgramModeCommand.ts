import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Joshua Berman <bermaj@rpi.edu>
 */
export class EnterProgramModeCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.EnterProgramMode);
  }

  protected getPayloadString(): string | null {
    return null;
  }

}