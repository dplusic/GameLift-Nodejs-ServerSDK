export class DescribePlayerSessionsRequest {
  public GameSessionId?: string
  public PlayerId?: string
  public PlayerSessionId?: string
  public PlayerSessionStatusFilter?: string
  public NextToken?: string
  public Limit: number

  constructor() {
    this.Limit = 0
  }
}
