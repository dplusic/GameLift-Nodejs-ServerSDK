export enum PlayerSessionStatus {
  NOT_SET,
  RESERVED,
  ACTIVE,
  COMPLETED,
  TIMEDOUT
}

export class PlayerSessionStatusMapper {
  static readonly RESERVED: string = 'RESERVED'
  static readonly ACTIVE: string = 'ACTIVE'
  static readonly COMPLETED: string = 'COMPLETED'
  static readonly TIMEDOUT: string = 'TIMEDOUT'
  static readonly NOT_SET: string = 'NOT_SET'

  public static GetPlayerSessionStatusForName(name?: string): PlayerSessionStatus {
    switch (name) {
      case PlayerSessionStatusMapper.RESERVED:
        return PlayerSessionStatus.RESERVED
      case PlayerSessionStatusMapper.ACTIVE:
        return PlayerSessionStatus.ACTIVE
      case PlayerSessionStatusMapper.COMPLETED:
        return PlayerSessionStatus.COMPLETED
      case PlayerSessionStatusMapper.TIMEDOUT:
        return PlayerSessionStatus.TIMEDOUT
      default:
        return PlayerSessionStatus.NOT_SET
    }
  }

  public static GetNameForPlayerSessionStatus(value: PlayerSessionStatus): string {
    switch (value) {
      case PlayerSessionStatus.RESERVED:
        return PlayerSessionStatusMapper.RESERVED
      case PlayerSessionStatus.ACTIVE:
        return PlayerSessionStatusMapper.ACTIVE
      case PlayerSessionStatus.COMPLETED:
        return PlayerSessionStatusMapper.COMPLETED
      case PlayerSessionStatus.TIMEDOUT:
        return PlayerSessionStatusMapper.TIMEDOUT
      default:
        return PlayerSessionStatusMapper.NOT_SET
    }
  }
}
