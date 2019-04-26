import { UnidenCommand } from "../UnidenCommand";
import { UnidenCommandType } from "../UnidenCommandType";

export type SystemInformation = {
  systemIndex: number,
  systemType: CreateSystemType,
  name: string,
  quickKey: number,
  holdTime: number,
  lockOut: OffOn,
  delayTime: number,
  dataSkip: OffOn,
  modulation: Modulation,
  attenuation: OffOn
}

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

export enum Modulation {
  Automatic = "AUTO",
  FM = "FM",
  NFM = "NFM"
}

export enum OffOn {
  OFF = 0,
  ON = 1
}

/**
 * @author Joshua Berman <bermaj@rpi.edu>
 */
export class SetSystemInfoCommand extends UnidenCommand {

  private readonly systemInfo: SystemInformation;

  constructor(systemInfo: SystemInformation) {
    super(UnidenCommandType.SetSystemInfo);
    this.systemInfo = systemInfo;

  }

  protected getPayloadString(): string | null {
    return `${ this.systemInfo.systemIndex }${ this.systemInfo.systemType }${ this.systemInfo.name }${ this.systemInfo.quickKey }
    ${ this.systemInfo.holdTime }${ this.systemInfo.lockOut }${ this.systemInfo.delayTime }${ this.systemInfo.dataSkip }
    ${ this.systemInfo.modulation }${ this.systemInfo.attenuation }`;
  }
}