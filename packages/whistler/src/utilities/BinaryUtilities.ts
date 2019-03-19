export class BinaryUtilities {

  public static getBinaryMessage(command: Array<number>): Buffer {
    const message = new Uint8Array(15);
    message[0] = 0x00;

    let i = 0;
    for (i; i < command.length; i++) {
      message[i+1] = command[i];
    }

    message[i+1] = 0x03;
    message[i+2] = BinaryUtilities.calculateChecksum(message);

    message[0] = 0x02;

    return Buffer.from(message.slice(0, i+2));
  }

  private static add(sum: number, num: number) {
    return sum + num;
  }

  private static calculateChecksum(message: Uint8Array) {
    return message.reduce(BinaryUtilities.add);
  }

}