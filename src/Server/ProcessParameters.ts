import { GameSession } from './Model/GameSession'
import { UpdateGameSession } from './Model/UpdateGameSession'
import { LogParameters } from './LogParameters'

export type OnStartGameSessionDelegate = (gameSession: GameSession) => void
export type OnUpdateGameSessionDelegate = (updateGameSession: UpdateGameSession) => void
export type OnProcessTerminateDelegate = () => void
export type OnHealthCheckDelegate = () => boolean

export class ProcessParameters {
  public OnStartGameSession: OnStartGameSessionDelegate
  public OnUpdateGameSession: OnUpdateGameSessionDelegate
  public OnProcessTerminate: OnProcessTerminateDelegate
  public OnHealthCheck: OnHealthCheckDelegate
  public Port: number
  public LogParameters: LogParameters

  constructor(
    onStartGameSession: OnStartGameSessionDelegate,
    onUpdateGameSession: OnUpdateGameSessionDelegate,
    onProcessTerminate: OnProcessTerminateDelegate,
    onHealthCheck: OnHealthCheckDelegate,
    port: number,
    logParameters: LogParameters
  ) {
    this.OnStartGameSession = onStartGameSession
    this.OnUpdateGameSession = onUpdateGameSession
    this.OnProcessTerminate = onProcessTerminate
    this.OnHealthCheck = onHealthCheck
    this.Port = port
    this.LogParameters = logParameters
  }
}
