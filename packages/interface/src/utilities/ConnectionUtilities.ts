import SerialPort, { PortInfo } from "serialport";

export class ConnectionUtilities {

  public static async getDevicePortInfo(manufacturerName: string): Promise<PortInfo> {
    const deviceList = await SerialPort.list();
    const filteredList = deviceList.filter(device => device.manufacturer ? device.manufacturer.includes(manufacturerName): false);
    if (filteredList.length < 1) throw Error(`Could not find device with a manufacturer ${manufacturerName}`);
    return filteredList[0];
  }

}