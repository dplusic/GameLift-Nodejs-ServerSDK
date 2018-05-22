import { Player } from './Player'
import { AttributeValue } from './AttributeValue'

export class MatchmakerData {
  // Match fields
  private static readonly FIELD_MATCH_ID: string = 'matchId'
  private static readonly FIELD_MATCHMAKING_CONFIG_ARN: string = 'matchmakingConfigurationArn'
  private static readonly FIELD_TEAMS: string = 'teams'

  // Team fields
  private static readonly FIELD_NAME: string = 'name'
  private static readonly FIELD_PLAYERS: string = 'players'

  // Player fields
  private static readonly FIELD_PLAYER_ID: string = 'playerId'
  private static readonly FIELD_ATTRIBUTES: string = 'attributes'
  private static readonly FIELD_LATENCY: string = 'attributes'

  // Attribute fields
  private static readonly FIELD_ATTRIBUTE_TYPE: string = 'attributeType'
  private static readonly FIELD_ATTRIBUTE_VALUE: string = 'valueAttribute'

  public MatchId?: string
  public MatchmakingConfigurationArn?: string
  public Players: Player[] = []

  public static FromJson(json: string): MatchmakerData {
    const obj: { [key: string]: any } = JSON.parse(json)

    const matchmakerData: MatchmakerData = new MatchmakerData()
    matchmakerData.MatchId = obj[MatchmakerData.FIELD_MATCH_ID]
    matchmakerData.MatchmakingConfigurationArn = obj[MatchmakerData.FIELD_MATCHMAKING_CONFIG_ARN]

    const parsedTeams: any[] = obj[MatchmakerData.FIELD_TEAMS]
    parsedTeams.forEach(parsedTeam => {
      matchmakerData.parseOutPlayersFromTeam(parsedTeam)
    })

    return matchmakerData
  }

  private static PlayerFromJson(teamName: string, obj: { [key: string]: any }): Player {
    const player: Player = new Player()
    player.Team = teamName
    player.PlayerId = obj[MatchmakerData.FIELD_PLAYER_ID]
    player.PlayerAttributes = MatchmakerData.ParsePlayerAttributes(
      obj[MatchmakerData.FIELD_ATTRIBUTES]
    )
    player.LatencyInMS = MatchmakerData.ParseLatency(obj[MatchmakerData.FIELD_LATENCY])

    return player
  }

  private static ParsePlayerAttributes(parsedAttrs: {
    [key: string]: any
  }): { [key: string]: AttributeValue } | undefined {
    if (parsedAttrs == null) {
      return undefined
    }

    const attrs: { [key: string]: AttributeValue } = {}
    Object.entries(parsedAttrs).forEach(oneAttr => {
      const val = MatchmakerData.ParseOneAttribute(oneAttr['1'])
      if (val != null) {
        attrs[oneAttr['0']] = val
      }
    })

    return attrs
  }

  private static ParseOneAttribute(parsedAttr: { [key: string]: any }): AttributeValue | undefined {
    const attributeType: string = parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_TYPE]
    switch (attributeType) {
      case 'DOUBLE':
        return new AttributeValue(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE])

      case 'STRING':
        return new AttributeValue(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE])

      case 'STRING_DOUBLE_MAP': {
        const values: { [key: string]: number } = {}
        Object.entries(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE] as {
          [key: string]: any
        }).forEach(onePair => {
          values[onePair['0']] = onePair['1']
        })

        return new AttributeValue(values)
      }

      case 'STRING_LIST': {
        const listValues: any[] = parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE]
        const values: string[] = []

        let x: number = 0
        listValues.forEach(val => {
          values.push(val)
          x++
        })

        return new AttributeValue(values)
      }
    }

    return undefined
  }

  private static ParseLatency(parsedLatency: {
    [key: string]: any
  }): { [key: string]: number } | undefined {
    if (parsedLatency == null) {
      return undefined
    }

    const latency: { [key: string]: number } = {}
    // TODO: We currently don't include latency measurements in the matchmaker data.
    //       If we decide we want to we would need to add the parsing for that here.
    //
    // Reasons why we might want to avoid including it:
    //     (1) data could easily be out of date
    //     (2) the game server has been communicating regularly with all the players,
    //         so it's in a better position to know what the current latency is
    //     (3) including latency bulks up the size of the matchmaker data, which
    //         effectively reduces the maximum match size that can be supported
    //         before exceeding the maximum supported match size.

    return latency
  }

  public parseOutPlayersFromTeam(parsedTeam: { [key: string]: any }): void {
    const teamName: string = parsedTeam[MatchmakerData.FIELD_NAME]

    const parsedPlayers: any[] = parsedTeam[MatchmakerData.FIELD_PLAYERS]
    parsedPlayers.forEach(parsedPlayer => {
      this.Players.push(MatchmakerData.PlayerFromJson(teamName, parsedPlayer))
    })
  }
}
