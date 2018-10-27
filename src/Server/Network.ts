import pDefer = require('p-defer')
import pTimeout = require('p-timeout')
import Socket = SocketIOClient.Socket
import getDebug = require('debug')
import { IAuxProxyMessageHandler } from './IAuxProxyMessageHandler'
import { GenericOutcome } from '../Common/GenericOutcome'
import { GameLiftError, GameLiftErrorType } from '../Common/GameLiftErrors'

export class Network {
  static readonly debug = getDebug('Network')

  socketToAuxProxy: Socket
  socketFromAuxProxy: Socket
  handler: IAuxProxyMessageHandler
  connected?: pDefer.DeferredPromise<boolean>

  constructor(
    socketToAuxProxy: Socket,
    socketFromAuxProxy: Socket,
    handler: IAuxProxyMessageHandler
  ) {
    this.socketToAuxProxy = socketToAuxProxy
    this.socketFromAuxProxy = socketFromAuxProxy
    this.handler = handler

    this.SetHandlerCallbacks(socketToAuxProxy)
    this.SetHandlerCallbacks(socketFromAuxProxy)
  }

  SetHandlerCallbacks(socket: Socket): void {
    socket.on('connect', () => {
      Network.debug('Socket.io event triggered: connect')
      this.connected!.resolve(true)
    })

    socket.on('connect_error', (e: any) => {
      Network.debug(`Socket.io event triggered: connect_error, with error: ${e}`)
    })

    socket.on('error', (e: any) => {
      Network.debug(`Socket.io event triggered: error, with error: ${e}`)
    })

    socket.on('disconnect', () => {
      Network.debug('Socket.io event triggered: disconnect')
    })

    socket.on('connect_timeout', () => {
      Network.debug('Socket.io event triggered: connect_timeout')
    })

    socket.on('message', (e: any) => {
      Network.debug(`Socket.io event triggered: message, with error: ${e}`)
    })

    socket.on('StartGameSession', (data: string, cb: (value: boolean) => void) => {
      this.handler.OnStartGameSession(data, cb)
    })

    socket.on('TerminateProcess', (data: string) => {
      this.handler.OnTerminateProcess(data)
    })

    socket.on('UpdateGameSession', (data: string, cb: (value: boolean) => void) => {
      this.handler.OnUpdateGameSession(data, cb)
    })
  }

  public Connect(): GenericOutcome {
    if (this.PerformConnect(this.socketToAuxProxy)) {
      if (this.PerformConnect(this.socketFromAuxProxy)) {
        // Success
        return new GenericOutcome()
      }
    }

    return new GenericOutcome(new GameLiftError(GameLiftErrorType.LOCAL_CONNECTION_FAILED))
  }

  public async PerformConnect(socket: Socket): Promise<boolean> {
    this.connected = pDefer<boolean>()
    socket.connect()

    try {
      await pTimeout(this.connected.promise, 5 * 1000)
      return true
    } catch (e) {
      return false
    }
  }

  public Disconnect(): GenericOutcome {
    this.socketToAuxProxy.close()
    this.socketFromAuxProxy.close()

    return new GenericOutcome()
  }
}
