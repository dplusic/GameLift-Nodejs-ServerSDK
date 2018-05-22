import Long = require('long')
import { PlayerSessionStatus } from './PlayerSessionStatus'

export class PlayerSession {
  public PlayerId?: string
  public PlayerSessionId?: string
  public GameSessionId?: string
  public FleetId?: string
  public IpAddress?: string
  public PlayerData?: string
  public Port: number
  public CreationTime: Long
  public TerminationTime: Long
  public Status: PlayerSessionStatus = PlayerSessionStatus.NOT_SET
  public DnsName?: string

  constructor() {
    this.Port = 0
    this.CreationTime = Long.ZERO
    this.TerminationTime = Long.ZERO
  }
}
