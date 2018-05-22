import sdk = require('../../Google/Sdk')
import { AttributeValue } from './AttributeValue'
import { Player } from './Player'
import { StartMatchBackfillRequest } from './StartMatchBackfillRequest'
import { StartMatchBackfillResult } from './StartMatchBackfillResult'
import { StopMatchBackfillRequest } from './StopMatchBackfillRequest'

export class BackfillDataMapper {
  public static CreateBufferedAttributeValue(
    attr: AttributeValue
  ): sdk.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue {
    const translated: sdk.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue = new sdk.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue()
    translated.type = attr.attrType

    switch (attr.attrType) {
      case AttributeValue.AttrType.STRING:
        translated.S = attr.S!
        break

      case AttributeValue.AttrType.DOUBLE:
        translated.N = attr.N!
        break

      case AttributeValue.AttrType.STRING_LIST:
        attr.SL!.forEach(str => {
          translated.SL.push(str)
        })
        break

      case AttributeValue.AttrType.STRING_DOUBLE_MAP:
        Object.entries(attr.SDM!).forEach(entry => {
          translated.SDM[entry['0']] = entry['1']
        })
        break
    }

    return translated
  }

  public static CreateBufferedPlayer(
    player: Player
  ): sdk.com.amazon.whitewater.auxproxy.pbuffer.Player {
    const translation = new sdk.com.amazon.whitewater.auxproxy.pbuffer.Player()

    translation.playerId = player.PlayerId!
    translation.team = player.Team!

    if (player.LatencyInMS) {
      Object.entries(player.LatencyInMS).forEach(entry => {
        translation.latencyInMs[entry['0']] = entry['1']
      })
    }

    if (player.PlayerAttributes) {
      Object.entries(player.PlayerAttributes).forEach(entry => {
        translation.playerAttributes[entry['0']] = BackfillDataMapper.CreateBufferedAttributeValue(
          entry['1']
        )
      })
    }

    return translation
  }

  public static CreateBufferedBackfillMatchmakingRequest(
    request: StartMatchBackfillRequest
  ): sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest {
    const translated: sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest = new sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest()

    translated.ticketId = request.TicketId!
    translated.gameSessionArn = request.GameSessionArn!
    translated.matchmakingConfigurationArn = request.MatchmakingConfigurationArn!
    for (let i: number = 0; i < request.Players!.length; i++) {
      translated.players.push(BackfillDataMapper.CreateBufferedPlayer(request.Players![i]))
    }

    return translated
  }

  public static ParseFromBufferedBackfillMatchmakingResponse(
    response: sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse
  ): StartMatchBackfillResult {
    const result: StartMatchBackfillResult = new StartMatchBackfillResult()
    result.TicketId = response.ticketId

    return result
  }

  public static CreateBufferedStopMatchmakingRequest(
    request: StopMatchBackfillRequest
  ): sdk.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest {
    const translated: sdk.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest = new sdk.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest()

    translated.ticketId = request.TicketId!
    translated.gameSessionArn = request.GameSessionArn!
    translated.matchmakingConfigurationArn = request.MatchmakingConfigurationArn!

    return translated
  }
}
