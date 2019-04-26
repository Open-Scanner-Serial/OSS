import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

/**
 * @author Joshua Berman <bermaj@rpi.edu>
 */
export class ExitProgramModeCommand extends UnidenCommand {

  constructor() {
    super(UnidenCommandType.ExitProgramMode);
  }

  protected getPayloadString(): string | null {
    return null;
  }

}