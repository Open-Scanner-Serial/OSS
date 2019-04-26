# `@open-scanner-serial/uniden`

> This package has a device-controller implementation for Uniden branded devices. There are also several command and responses implemented. We are welcoming contributors!

## Usage

```js
import {
  UnidenDeviceController, 
  UserRecordControlStatus, 
  UserRecordControlCommand 
} from "@open-scanner-serial/uniden";

(async () => {

  const portInfo = await ConnectionUtils.getDevicePortInfo("UNIDEN AMERICA CORP.");
  const controller = new UnidenDeviceController(portInfo);
  await controller.connect();
  controller.listen();

  const command = new UserRecordControlCommand(UserRecordControlStatus.Start);
  if (response.success) {
    console.log("Recording started!");
  }
  else {
    console.error("Recording could not be started");
    console.error(response.error);
  }
})()
```
