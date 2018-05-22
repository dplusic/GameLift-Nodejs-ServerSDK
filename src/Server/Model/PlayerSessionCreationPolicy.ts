export enum PlayerSessionCreationPolicy {
  NOT_SET,
  ACCEPT_ALL,
  DENY_ALL
}

export class PlayerSessionCreationPolicyMapper {
  static readonly ACCEPT_ALL: string = 'ACCEPT_ALL'
  static readonly DENY_ALL: string = 'DENY_ALL'
  static readonly NOT_SET: string = 'NOT_SET'

  public static GetPlayerSessionCreationPolicyForName(name: string): PlayerSessionCreationPolicy {
    switch (name) {
      case PlayerSessionCreationPolicyMapper.ACCEPT_ALL:
        return PlayerSessionCreationPolicy.ACCEPT_ALL
      case PlayerSessionCreationPolicyMapper.DENY_ALL:
        return PlayerSessionCreationPolicy.DENY_ALL
      default:
        return PlayerSessionCreationPolicy.NOT_SET
    }
  }

  public static GetNameForPlayerSessionCreationPolicy(value: PlayerSessionCreationPolicy): string {
    switch (value) {
      case PlayerSessionCreationPolicy.ACCEPT_ALL:
        return PlayerSessionCreationPolicyMapper.ACCEPT_ALL
      case PlayerSessionCreationPolicy.DENY_ALL:
        return PlayerSessionCreationPolicyMapper.DENY_ALL
      default:
        return PlayerSessionCreationPolicyMapper.NOT_SET
    }
  }
}
