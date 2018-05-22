import { AttributeValue } from "./AttributeValue";

export class Player {
  public PlayerId?: string
  public PlayerAttributes?: { [key: string]: AttributeValue}
  public Team?: string
  public LatencyInMS?: { [key: string]: number }
}
