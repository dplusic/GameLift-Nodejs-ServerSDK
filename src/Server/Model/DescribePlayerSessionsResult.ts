import { PlayerSession } from "./PlayerSession";

export class DescribePlayerSessionsResult {
  static readonly MAX_PLAYER_SESSIONS: number = 1024

  public NextToken?: string
  public PlayerSessions: PlayerSession[]

  constructor() {
    this.PlayerSessions = []
  }

  public AddPlayerSession(value: PlayerSession): void {
    if (this.PlayerSessions.length < DescribePlayerSessionsResult.MAX_PLAYER_SESSIONS) {
      this.PlayerSessions.push(value)
    }
  }
}
