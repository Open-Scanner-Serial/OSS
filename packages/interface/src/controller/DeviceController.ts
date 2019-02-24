export interface DeviceController<C, R> {
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  issueCommand: (command: C) => Promise<R>
}