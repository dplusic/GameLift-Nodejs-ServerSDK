import Long = require('long')
import pTimeout = require('p-timeout')
import sleep = require('sleep-promise')
import getDebug = require('debug')
import io = require('socket.io-client')
import sdk = require('../Google/Sdk')
import { IAuxProxyMessageHandler } from './IAuxProxyMessageHandler'
import { AuxProxyMessageSender } from './AuxProxyMessageSender'
import { Network } from './Network'
import { ProcessParameters } from './ProcessParameters'
import { GenericOutcome } from '../Common/GenericOutcome'
import { GameLiftError, GameLiftErrorType } from '../Common/GameLiftErrors'
import { AwsStringOutcome } from '../Common/AwsStringOutcome'
import { AwsLongOutcome } from '../Common/AwsLongOutcome'
import { PlayerSessionCreationPolicy } from './Model/PlayerSessionCreationPolicy'
import { DescribePlayerSessionsRequest } from './Model/DescribePlayerSessionsRequest'
import { DescribePlayerSessionsOutcome } from '../Common/DescribePlayerSessionsOutcome'
import { StartMatchBackfillRequest } from './Model/StartMatchBackfillRequest'
import { StartMatchBackfillOutcome } from '../Common/StartMatchBackfillOutcome'
import { StopMatchBackfillRequest } from './Model/StopMatchBackfillRequest'
import { GameSession } from './Model/GameSession'
import { GameSessionParser } from './GameSessionParser'
import { GameSessionMapper } from './Model/GameSessionMapper'
import { UpdateReason, UpdateReasonMapper } from './Model/UpdateReason'
import { UpdateGameSession } from './Model/UpdateGameSession'
import { GameLiftServerAPI } from './GameLiftServerAPI'

export class ServerState implements IAuxProxyMessageHandler {
  static readonly HOSTNAME: string = '127.0.0.1'
  static readonly PORT: string = '5757'
  static readonly PID_KEY: string = 'pID'
  static readonly SDK_VERSION_KEY: string = 'sdkVersion'
  static readonly FLAVOR_KEY: string = 'sdkLanguage'
  static readonly FLAVOR: string = 'Nodejs'
  static readonly HEALTHCHECK_TIMEOUT_SECONDS: number = 60

  static networkInitialized: boolean = false
  static readonly instance: ServerState = new ServerState()
  static readonly debug = getDebug('ServerState')

  sender?: AuxProxyMessageSender
  network?: Network

  processParameters?: ProcessParameters
  processReady: boolean = false
  gameSessionId?: string
  terminationTime: Long = Long.NEG_ONE

  public static get Instance(): ServerState {
    return ServerState.instance
  }

  public async ProcessReady(procParameters: ProcessParameters): Promise<GenericOutcome> {
    this.processReady = true
    this.processParameters = procParameters

    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }

    const result: GenericOutcome = await this.sender!.ProcessReady(
      this.processParameters.Port,
      this.processParameters.LogParameters.LogPaths
    )

    this.StartHealthCheck()

    return result
  }

  public async ProcessEnding(): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    return this.sender!.ProcessEnding()
  }

  public async ActivateGameSession(): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    if (!this.gameSessionId) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return this.sender!.ActivateGameSession(this.gameSessionId)
  }

  public async TerminateGameSession(): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    if (!this.gameSessionId) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return this.sender!.TerminateGameSession(this.gameSessionId)
  }

  public GetGameSessionId(): AwsStringOutcome {
    if (!this.gameSessionId) {
      return new AwsStringOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return new AwsStringOutcome(this.gameSessionId)
  }

  public GetTerminationTime(): AwsLongOutcome {
    if (Long.NEG_ONE.compare(this.terminationTime) === 0) {
      return new AwsLongOutcome(new GameLiftError(GameLiftErrorType.TERMINATION_TIME_NOT_SET))
    }
    return new AwsLongOutcome(this.terminationTime)
  }

  public async UpdatePlayerSessionCreationPolicy(
    playerSessionPolicy: PlayerSessionCreationPolicy
  ): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    if (!this.gameSessionId) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return this.sender!.UpdatePlayerSessionCreationPolicy(this.gameSessionId, playerSessionPolicy)
  }

  public async AcceptPlayerSession(playerSessionId: string): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    if (!this.gameSessionId) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return this.sender!.AcceptPlayerSession(playerSessionId, this.gameSessionId)
  }

  public async RemovePlayerSession(playerSessionId: string): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    }
    if (!this.gameSessionId) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.GAMESESSION_ID_NOT_SET))
    }
    return this.sender!.RemovePlayerSession(playerSessionId, this.gameSessionId)
  }

  public async DescribePlayerSessions(
    request: DescribePlayerSessionsRequest
  ): Promise<DescribePlayerSessionsOutcome> {
    ServerState.debug(`Describing player sessions for playerSessionId ${request.PlayerSessionId}`)
    if (!ServerState.networkInitialized) {
      return new DescribePlayerSessionsOutcome(
        new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED)
      )
    } else {
      return this.sender!.DescribePlayerSessions(request)
    }
  }

  public async BackfillMatchmaking(
    request: StartMatchBackfillRequest
  ): Promise<StartMatchBackfillOutcome> {
    if (!ServerState.networkInitialized) {
      return new StartMatchBackfillOutcome(
        new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED)
      )
    } else {
      return this.sender!.BackfillMatchmaking(request)
    }
  }

  public async StopMatchmaking(request: StopMatchBackfillRequest): Promise<GenericOutcome> {
    if (!ServerState.networkInitialized) {
      return new GenericOutcome(new GameLiftError(GameLiftErrorType.NETWORK_NOT_INITIALIZED))
    } else {
      return this.sender!.StopMatchmaking(request)
    }
  }

  async StartHealthCheck(): Promise<void> {
    ServerState.debug('HealthCheck thread started.')
    while (this.processReady) {
      this.ReportHealth()
      await sleep(ServerState.HEALTHCHECK_TIMEOUT_SECONDS * 1000)
    }
  }

  async ReportHealth(): Promise<void> {
    ServerState.debug('Reporting health using the OnHealthCheck callback.')
    const result = (async () => this.processParameters!.OnHealthCheck())()

    try {
      const healthCheckResult = await pTimeout(
        result,
        ServerState.HEALTHCHECK_TIMEOUT_SECONDS * 1000
      )

      ServerState.debug(`Received health response from the server process: ${healthCheckResult}`)
      this.sender!.ReportHealth(healthCheckResult)
    } catch (e) {
      ServerState.debug(
        'Timed out waiting for health response from the server process. Reporting as unhealthy.'
      )
      this.sender!.ReportHealth(false)
    }
  }

  public InitializeNetworking(): GenericOutcome {
    if (!ServerState.networkInitialized) {
      const socketToAuxProxy = io.connect(this.CreateURI(), this.CreateDefaultOptions())
      const socketFromAuxProxy = io.connect(this.CreateURI(), this.CreateDefaultOptions())
      this.sender = new AuxProxyMessageSender(socketToAuxProxy)
      this.network = new Network(socketToAuxProxy, socketFromAuxProxy, this)
      const outcome = this.network.Connect()
      ServerState.networkInitialized = outcome.Success
      return outcome
    }

    // Idempotent
    return new GenericOutcome()
  }

  CreateURI(): string {
    const endpoint = `http://${ServerState.HOSTNAME}:${ServerState.PORT}`
    return endpoint
  }

  CreateDefaultOptions(): SocketIOClient.ConnectOpts {
    const options: SocketIOClient.ConnectOpts = {}
    options.query = {
      [ServerState.PID_KEY]: process.pid.toString(),
      [ServerState.SDK_VERSION_KEY]: GameLiftServerAPI.GetSdkVersion().Result,
      [ServerState.FLAVOR_KEY]: ServerState.FLAVOR
    }
    options.autoConnect = false
    options.forceNew = true
    options.transports = ['websocket']

    return options
  }

  public OnStartGameSession(rawGameSession: string, ack: (value: boolean) => void): void {
    ServerState.debug(
      `ServerState got the startGameSession signal. rawGameSession : ${rawGameSession}`
    )

    if (!this.processReady) {
      ServerState.debug('Got a game session on inactive process. Sending false ack.')
      ack(false)
      return
    }
    ServerState.debug('Sending true ack.')
    ack(true)
    //
    ;(async () => {
      const gameSession: GameSession = GameSessionParser.Parse(rawGameSession)
      this.gameSessionId = gameSession.GameSessionId
      this.processParameters!.OnStartGameSession(gameSession)
    })()
  }

  public OnUpdateGameSession(rawUpdateGameSession: string, ack: (value: boolean) => void): void {
    ServerState.debug(
      `ServerState got the updateGameSession signal. rawGameSession : ${rawUpdateGameSession}`
    )

    if (!this.processReady) {
      ServerState.debug('Got an updated game session on inactive process. Sending false ack.')
      ack(false)
      return
    }
    ServerState.debug('Sending true ack.')
    ack(true)
    ;(async () => {
      const updateGameSession: sdk.com.amazon.whitewater.auxproxy.pbuffer.UpdateGameSession = JSON.parse(
        rawUpdateGameSession
      )
      const gameSession: GameSession = GameSessionMapper.ParseFromBufferedGameSession(
        updateGameSession.gameSession as sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSession
      )
      this.gameSessionId = gameSession.GameSessionId
      const updateReason: UpdateReason = UpdateReasonMapper.GetUpdateReasonForName(
        updateGameSession.updateReason
      )

      this.processParameters!.OnUpdateGameSession(
        new UpdateGameSession(gameSession, updateReason, updateGameSession.backfillTicketId)
      )
    })()
  }

  public OnTerminateProcess(rawTerminationTime: string): void {
    ServerState.debug(
      `ServerState got the terminateProcess signal.  rawTerminationTime : ${rawTerminationTime}`
    )
    ;(async () => {
      const deserialized: sdk.com.amazon.whitewater.auxproxy.pbuffer.TerminateProcess = JSON.parse(
        rawTerminationTime
      )

      if (deserialized == null) {
        // If termination time isn't sent from AuxProxy use now plus 5 minutes.
        let defaultTerminationTime = Long.fromNumber(Date.now())
        defaultTerminationTime = defaultTerminationTime.add(270 * 1000)
        this.terminationTime = defaultTerminationTime.mul(10000)
      } else {
        /* TerminationTime coming from AuxProxy is seconds that have elapsed since Unix epoch time begins (00:00:00 UTC Jan 1 1970).
         * Since epoch time for dotNet starts at 0001-01-01T00:00:00 we need to create a DateTime at the beginning of Unix epoch time
         * and add the TerminationTime to that date.
         */
        this.terminationTime = deserialized.terminationTime.mul(1000 * 10000)
      }

      this.processParameters!.OnProcessTerminate()
    })()
  }

  public Shutdown(): void {
    ServerState.networkInitialized = false
    this.network!.Disconnect()
    this.processReady = false
  }
}
