import { UnidenCommandType } from "./UnidenCommandType";

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export abstract class UnidenCommand {

  protected readonly type: UnidenCommandType;

  protected constructor(type: UnidenCommandType) {
    this.type = type;
  }

  protected abstract getPayloadString(): string | null;

  public toString(): string {
    const payload = this.getPayloadString();
    return `${ this.type }${ payload ? `,${ payload }` : "" }\r`;
  }

}