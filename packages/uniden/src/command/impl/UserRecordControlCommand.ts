import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

export enum UserRecordControlStatus {
  Stop = 0,
  Start = 1
}

/**
 * @author Aaron Shapiro <shapia4@rpi.edu>
 */
export class UserRecordControlCommand extends UnidenCommand {

  private readonly status: UserRecordControlStatus | undefined;

  constructor(status?: UserRecordControlStatus) {
    super(UnidenCommandType.UserRecordControl);
    this.status = status;
  }

  protected getPayloadString(): string | null {
    switch (this.status) {
      case UserRecordControlStatus.Start:
      case UserRecordControlStatus.Stop:
        return `${ this.status }`;
      default:
        return null;
    }
  }

}