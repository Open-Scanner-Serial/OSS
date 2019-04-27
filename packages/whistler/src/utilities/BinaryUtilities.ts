export class BinaryUtilities {

  public static getBinaryMessage(command: Array<number>): Buffer {

    //max message length
    const message = new Uint8Array(15);

    //set start to null
    message[0] = 0x00;

    //add the length to the message
    let i = 0;
    for (i; i < command.length; i++) {
      message[i+1] = command[i];
    }


    //end symbol and checksum calculation
    message[i+1] = 0x03;
    message[i+2] = BinaryUtilities.calculateChecksum(message);

    //set start to start
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