# `@open-scanner-serial/whistler`

> This package has a device-controller implementation for Whistler branded devices. There are also several command and responses implemented. We are welcoming contributors!

## Usage

```js
import {
  WhistlerDeviceController, 
  GetLCDCommand 
} from "@open-scanner-serial/whistler";

import { ConnectionUtilities } from "@open-scanner-serial/interface";

(async () => {
  const portInfo = await ConnectionUtilities.getDevicePortInfo("WHISTLER");
  const controller = new WhistlerDeviceController(portInfo);
  await controller.connect();
 
  const command = new GetLCDCommand();
  const response = await controller.issueCommand(command);
  console.log(response);
  
  await controller.disconnect();
  
})()
```
