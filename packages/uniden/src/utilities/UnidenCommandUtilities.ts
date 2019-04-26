import { UnidenCommandType } from "../command/UnidenCommandType";

export class UnidenCommandUtilities {

  public static isValidCommand(command: string): boolean {
    const commandValues = Object.values(UnidenCommandType);
    return commandValues.includes(command);
  }

}