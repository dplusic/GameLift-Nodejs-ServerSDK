export enum Status {
  NOT_SET,
  ACTIVE,
  ACTIVATING,
  TERMINATED,
  TERMINATING
}

export class GameSessionStatus {
  public GetGameSessionStatusForName(name: string): GameSessionStatus | undefined {
    return undefined
  }

  public GetNameForGameSessionStatus(value: GameSessionStatus): String | undefined {
    return undefined
  }
}
