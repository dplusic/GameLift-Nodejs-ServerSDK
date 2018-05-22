import pDefer = require('p-defer')
import pTimeout = require('p-timeout')
import Socket = SocketIOClient.Socket
import getDebug = require('debug')
import protobuf = require('protobufjs')
import sdk = require('../Google/Sdk')
import { GameLiftErrorType, GameLiftError } from '../Common/GameLiftErrors'
import { GenericOutcome } from '../Common/GenericOutcome'
import { DescribePlayerSessionsOutcome } from '../Common/DescribePlayerSessionsOutcome'
import { StartMatchBackfillOutcome } from '../Common/StartMatchBackfillOutcome'
import { BackfillDataMapper } from './Model/BackfillDataMapper'
import { DescribePlayerSessionsResultMapper } from './Model/DescribePlayerSessionsResultMapper'
import {
  PlayerSessionCreationPolicy,
  PlayerSessionCreationPolicyMapper
} from './Model/PlayerSessionCreationPolicy'
import { DescribePlayerSessionsRequest } from './Model/DescribePlayerSessionsRequest'
import { DescribePlayerSessionsRequestMapper } from './Model/DescribePlayerSessionsRequestMapper'
import { promises } from 'fs'
import { StartMatchBackfillRequest } from './Model/StartMatchBackfillRequest'
import { StopMatchBackfillRequest } from './Model/StopMatchBackfillRequest'

export class AuxProxyMessageSender {
  static readonly debug = getDebug('AuxProxyMessageSender')
  static readonly GENERIC_ERROR: GenericOutcome = new GenericOutcome(
    new GameLiftError(GameLiftErrorType.LOCAL_CONNECTION_FAILED)
  )
  static readonly DESCRIBE_PLAYER_SESSIONS_ERROR: DescribePlayerSessionsOutcome = new DescribePlayerSessionsOutcome(
    new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED)
  )
  static readonly START_MATCH_BACKFILL_ERROR: StartMatchBackfillOutcome = new StartMatchBackfillOutcome(
    new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED)
  )
  static readonly STOP_MATCH_BACKFILL_ERROR: GenericOutcome = new GenericOutcome(
    new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED)
  )

  socket: Socket

  constructor(socket: Socket) {
    this.socket = socket
  }

  CreateAckFunctionForStartMatchBackfill(
    deferred: any /* pDefer.DeferredPromise<StartMatchBackfillOutcome> */
  ): (ack: boolean, response: string) => void {
    return (ack, response) => {
      AuxProxyMessageSender.debug(`Got ack ${ack} with response ${response}`)

      if (null == ack) {
        deferred.resolve(
          new StartMatchBackfillOutcome(new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED))
        )
        return
      }

      const success = ack

      if (success) {
        const deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.fromObject(
          JSON.parse(response)
        )
        const translation = BackfillDataMapper.ParseFromBufferedBackfillMatchmakingResponse(
          deserialized
        )
        deferred.resolve(new StartMatchBackfillOutcome(translation))
      } else {
        deferred.resolve(
          new StartMatchBackfillOutcome(new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED))
        )
      }
    }
  }

  CreateAckFunctionForDescribePlayerSessions(
    deferred: any /* pDefer.DeferredPromise<DescribePlayerSessionsOutcome> */
  ): (ack: boolean, response: string) => void {
    return (ack, response) => {
      AuxProxyMessageSender.debug(`Got ack ${ack} with response ${response}`)

      if (null == ack) {
        deferred.resolve(
          new DescribePlayerSessionsOutcome(
            new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED)
          )
        )
        return
      }

      const success = ack

      if (success) {
        const deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.fromObject(
          JSON.parse(response)
        )
        const translation = DescribePlayerSessionsResultMapper.ParseFromBufferedDescribePlayerSessionsResponse(
          deserialized
        )
        deferred.resolve(new DescribePlayerSessionsOutcome(translation))
      } else {
        deferred.resolve(
          new DescribePlayerSessionsOutcome(
            new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED)
          )
        )
      }
    }
  }

  public ProcessReady(port: number, logPathsToUpload: string[]): Promise<GenericOutcome> {
    const pReady = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ProcessReady()
    pReady.port = port
    pReady.logPathsToUpload = logPathsToUpload

    return this.EmitEventGeneric(pReady)
  }

  public ProcessEnding(): Promise<GenericOutcome> {
    const pEnding = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding()

    return this.EmitEventGeneric(pEnding)
  }

  public ActivateGameSession(gameSessionId: string): Promise<GenericOutcome> {
    const activateGameSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate()
    activateGameSession.gameSessionId = gameSessionId

    return this.EmitEventGeneric(activateGameSession)
  }

  public TerminateGameSession(gameSessionId: string): Promise<GenericOutcome> {
    const terminateGameSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate()
    terminateGameSession.gameSessionId = gameSessionId

    return this.EmitEventGeneric(terminateGameSession)
  }

  public UpdatePlayerSessionCreationPolicy(
    gameSessionId: string,
    playerSessionPolicy: PlayerSessionCreationPolicy
  ): Promise<GenericOutcome> {
    const policy = new sdk.com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy()
    policy.gameSessionId = gameSessionId
    policy.newPlayerSessionCreationPolicy = PlayerSessionCreationPolicyMapper.GetNameForPlayerSessionCreationPolicy(
      playerSessionPolicy
    )

    return this.EmitEventGeneric(policy)
  }

  public AcceptPlayerSession(
    playerSessionId: string,
    gameSessionId: string
  ): Promise<GenericOutcome> {
    const acceptPlayerSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession()
    acceptPlayerSession.playerSessionId = playerSessionId
    acceptPlayerSession.gameSessionId = gameSessionId

    return this.EmitEventGeneric(acceptPlayerSession)
  }

  public RemovePlayerSession(
    playerSessionId: string,
    gameSessionId: string
  ): Promise<GenericOutcome> {
    const removePlayerSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession()
    removePlayerSession.playerSessionId = playerSessionId
    removePlayerSession.gameSessionId = gameSessionId

    return this.EmitEventGeneric(removePlayerSession)
  }

  public DescribePlayerSessions(
    request: DescribePlayerSessionsRequest
  ): Promise<DescribePlayerSessionsOutcome> {
    AuxProxyMessageSender.debug(`Describing player sessions ${request}`)
    const translation = DescribePlayerSessionsRequestMapper.ParseFromDescribePlayerSessionsRequest(
      request
    )

    const deferred = pDefer<DescribePlayerSessionsOutcome>()

    const ackFunction = this.CreateAckFunctionForDescribePlayerSessions(deferred)

    return this.EmitEvent(
      translation,
      ackFunction,
      deferred,
      AuxProxyMessageSender.DESCRIBE_PLAYER_SESSIONS_ERROR
    )
  }

  public BackfillMatchmaking(
    request: StartMatchBackfillRequest
  ): Promise<StartMatchBackfillOutcome> {
    const translation = BackfillDataMapper.CreateBufferedBackfillMatchmakingRequest(request)

    const deferred = pDefer<StartMatchBackfillOutcome>()

    const ackFunction = this.CreateAckFunctionForStartMatchBackfill(deferred)

    return this.EmitEvent(
      translation,
      ackFunction,
      deferred,
      AuxProxyMessageSender.START_MATCH_BACKFILL_ERROR
    )
  }

  public StopMatchmaking(request: StopMatchBackfillRequest): Promise<GenericOutcome> {
    const translation = BackfillDataMapper.CreateBufferedStopMatchmakingRequest(request)

    const deferred = pDefer<GenericOutcome>()

    const ackFunction = this.CreateAckFunctionGeneric(deferred)

    return this.EmitEvent(
      translation,
      ackFunction,
      deferred,
      AuxProxyMessageSender.STOP_MATCH_BACKFILL_ERROR
    )
  }

  public ReportHealth(healthStatus: boolean): Promise<GenericOutcome> {
    const rHealth = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ReportHealth()
    rHealth.healthStatus = healthStatus

    return this.EmitEventGeneric(rHealth)
  }

  CreateAckFunctionGeneric(
    deferred: any /* pDefer.DeferredPromise<GenericOutcome> */
  ): (ack: boolean) => void {
    return ack => {
      AuxProxyMessageSender.debug(`Got ack ${ack}`)

      if (null == ack) {
        deferred.resolve(
          new GenericOutcome(new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED))
        )
        return
      }

      const success = ack

      if (success) {
        deferred.resolve(new GenericOutcome())
      } else {
        deferred.resolve(
          new GenericOutcome(new GameLiftError(GameLiftErrorType.SERVICE_CALL_FAILED))
        )
      }
    }
  }

  EmitEventGeneric(message: any): Promise<GenericOutcome> {
    const deferred = pDefer<GenericOutcome>()
    const ackFunction = this.CreateAckFunctionGeneric(deferred)
    return this.EmitEvent(message, ackFunction, deferred, AuxProxyMessageSender.GENERIC_ERROR)
  }

  async EmitEvent<T extends GenericOutcome>(
    message: any,
    ackFunction: (...args: any[]) => void,
    deferred: any /* pDefer.DeferredPromise<T> */,
    error: T
  ): Promise<T> {
    AuxProxyMessageSender.debug(`Emitting event for message ${JSON.stringify(message.toJSON())}`)
    this.socket.emit(
      'com.amazon.whitewater.auxproxy.pbuffer.' + message.constructor.name,
      message.constructor.encode(message).finish(),
      ackFunction
    )

    try {
      return await pTimeout(deferred.promise as Promise<T>, 30 * 1000)
    } catch (e) {
      return error
    }
  }
}
