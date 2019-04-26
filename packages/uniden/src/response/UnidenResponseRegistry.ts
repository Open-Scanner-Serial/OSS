import { UnidenCommandType } from "../command/UnidenCommandType";
import { CreateSystemResponse } from "./impl/CreateSystemResponse";
import { EnterProgramModeResponse } from "./impl/EnterProgramModeResponse";
import { ExitProgramModeResponse } from "./impl/ExitProgramModeResponse";
import { GetFirmwareVersionResponse } from "./impl/GetFirmwareVersionResponse";
import { GetModelInfoResponse } from "./impl/GetModelInfoResponse";
import { GetScannerInfoResponse } from "./impl/GetScannerInfoResponse";
import { GetSystemInfoResponse } from "./impl/GetSystemInfoResponse";
import { SetSystemInfoResponse } from "./impl/SetSystemInfoResponse";
import { UserRecordControlResponse } from "./impl/UserRecordControlResponse";

export const UnidenResponseRegistry = {
  [UnidenCommandType.GetModelInfo]: GetModelInfoResponse,
  [UnidenCommandType.GetFirmwareVersion]: GetFirmwareVersionResponse,
  [UnidenCommandType.UserRecordControl]: UserRecordControlResponse,
  [UnidenCommandType.GetScannerInfo]: GetScannerInfoResponse,
  [UnidenCommandType.SetSystemInfo]: SetSystemInfoResponse,
  [UnidenCommandType.GetSystemInfo]: GetSystemInfoResponse,
  [UnidenCommandType.CreateSystem]: CreateSystemResponse,
  [UnidenCommandType.EnterProgramMode]: EnterProgramModeResponse,
  [UnidenCommandType.ExitProgramMode]: ExitProgramModeResponse
};