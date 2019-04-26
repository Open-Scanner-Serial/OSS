import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

export enum CreateSystemType {
  Racing = "RACE",
  CONVENTIONAL = "CNV",
  MOT_800_T2_STD = "M82S",
  MOT_800_T2_SPL = "M82P",
  MOT_900_T2 = "M92",
  MOT_VHF_T2 = "MV2",
  MOT_UHF_T2 = "MU2",
  MOT_800_T1_STD = "M81S",
  MOT_800_T1_SPL = "M81P",
  EDACS_NARROW = "EDN",
  EDACS_WIDE = "EDW",
  EDACS_SCAT = "EDS",
  LTR = "LTR",
  MOT_800_T2_CUS = "M82C",
  MOT_800_T1_CUS = "M81C"
}

/**
 * @author Joshua Berman <bermaj@rpi.edu>
 */
export class CreateSystemCommand extends UnidenCommand {

  private readonly systemType: CreateSystemType;

  constructor(systemType: CreateSystemType) {
    super(UnidenCommandType.CreateSystem);
    this.systemType = systemType;
  }

  protected getPayloadString(): string | null {
    return `${ this.systemType }`;
  }
}