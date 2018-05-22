import { GameProperty } from "./GameProperty";

export class GameSession {
  public GameSessionId?: string
  public Name?: string
  public FleetId?: string
  public MaximumPlayerSessionCount: number
  public Port: number = 0
  public IpAddress?: string
  public GameSessionData?: string
  public MatchmakerData?: string
  public GameProperties: GameProperty[]
  public DnsName?: string

  constructor() {
    this.GameProperties = []
    this.MaximumPlayerSessionCount = 0
  }
}
