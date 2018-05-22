export interface IAuxProxyMessageHandler {
  OnStartGameSession(rawGameSession: string, ack: (value: boolean) => void): void
  OnUpdateGameSession(rawGameSessionUpdate: string, ack: (value: boolean) => void): void
  OnTerminateProcess(rawTerminationTime: string): void
}
