import getDebug = require('debug')
import sdk = require('../Google/Sdk')
import { GameSession } from './Model/GameSession'
import { GameSessionMapper } from './Model/GameSessionMapper'

export class GameSessionParser {
  static readonly debug = getDebug('GameSessionParser')

  public static Parse(rawGameSession: string): GameSession {
    GameSessionParser.debug(`Parsing game session: '${rawGameSession}'`)
    const deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.fromObject(
      JSON.parse(rawGameSession)
    )
    return GameSessionMapper.ParseFromBufferedGameSession(
      deserialized.gameSession as sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSession
    )
  }
}
