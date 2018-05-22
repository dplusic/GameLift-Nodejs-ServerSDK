import Long = require('long')
import sdk = require('../../Google/Sdk')
import { DescribePlayerSessionsResult } from './DescribePlayerSessionsResult'
import { PlayerSession } from './PlayerSession'
import { PlayerSessionStatusMapper } from './PlayerSessionStatus'

export class DescribePlayerSessionsResultMapper {
  public static ParseFromBufferedDescribePlayerSessionsResponse(
    response: sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse
  ): DescribePlayerSessionsResult {
    const translation = new DescribePlayerSessionsResult()

    translation.NextToken = response.nextToken
    translation.PlayerSessions = []

    response.playerSessions.forEach(playerSession => {
      const translatedPlayerSession = new PlayerSession()

      translatedPlayerSession.CreationTime =
        playerSession.creationTime != null ? playerSession.creationTime : Long.ZERO
      translatedPlayerSession.FleetId =
        playerSession.fleetId != null ? playerSession.fleetId : undefined
      translatedPlayerSession.GameSessionId =
        playerSession.gameSessionId != null ? playerSession.gameSessionId : undefined
      translatedPlayerSession.IpAddress =
        playerSession.ipAddress != null ? playerSession.ipAddress : undefined
      translatedPlayerSession.PlayerData =
        playerSession.playerData != null ? playerSession.playerData : undefined
      translatedPlayerSession.PlayerId =
        playerSession.playerId != null ? playerSession.playerId : undefined
      translatedPlayerSession.PlayerSessionId =
        playerSession.playerSessionId != null ? playerSession.playerSessionId : undefined
      translatedPlayerSession.Port = playerSession.port != null ? playerSession.port : 0
      translatedPlayerSession.Status = PlayerSessionStatusMapper.GetPlayerSessionStatusForName(
        playerSession.status != null ? playerSession.status : undefined
      )
      translatedPlayerSession.TerminationTime = playerSession.terminationTime || Long.ZERO
      translatedPlayerSession.DnsName =
        playerSession.dnsName != null ? playerSession.dnsName : undefined

      translation.AddPlayerSession(translatedPlayerSession)
    })

    return translation
  }
}
