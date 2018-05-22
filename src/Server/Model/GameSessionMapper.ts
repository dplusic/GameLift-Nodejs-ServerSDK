import sdk = require('../../Google/Sdk')
import { GameSession } from './GameSession'
import { GameProperty } from './GameProperty'

export class GameSessionMapper {
  public static ParseFromBufferedGameSession(
    gameSession: sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSession
  ): GameSession {
    const translation = new GameSession()

    translation.Name = gameSession.name
    translation.FleetId = gameSession.fleetId
    translation.GameSessionId = gameSession.gameSessionId
    translation.MaximumPlayerSessionCount = gameSession.maxPlayers
    translation.Port = gameSession.port
    translation.IpAddress = gameSession.ipAddress
    translation.GameSessionData = gameSession.gameSessionData
    translation.MatchmakerData = gameSession.matchmakerData
    translation.DnsName = gameSession.dnsName

    gameSession.gameProperties.forEach(gameProperty => {
      const translatedGameProperty = new GameProperty()

      translatedGameProperty.Key = gameProperty.key != null ? gameProperty.key : undefined
      translatedGameProperty.Value = gameProperty.value != null ? gameProperty.value : undefined

      translation.GameProperties.push(translatedGameProperty)
    })

    return translation
  }
}
