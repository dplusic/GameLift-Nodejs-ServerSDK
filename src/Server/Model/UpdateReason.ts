export enum UpdateReason {
  MATCHMAKING_DATA_UPDATED,
  BACKFILL_FAILED,
  BACKFILL_TIMED_OUT,
  BACKFILL_CANCELLED,
  UNKNOWN
}

export class UpdateReasonMapper {
  static readonly MATCHMAKING_DATA_UPDATED_REASON: string = 'MATCHMAKING_DATA_UPDATED'
  static readonly BACKFILL_FAILED_REASON: string = 'BACKFILL_FAILED'
  static readonly BACKFILL_TIMED_OUT_REASON: string = 'BACKFILL_TIMED_OUT'
  static readonly BACKFILL_CANCELLED_REASON: string = 'BACKFILL_CANCELLED'
  static readonly UNKNOWN_REASON: string = 'UNKNOWN'

  public static GetUpdateReasonForName(name: string): UpdateReason {
    switch (name) {
      case UpdateReasonMapper.MATCHMAKING_DATA_UPDATED_REASON:
        return UpdateReason.MATCHMAKING_DATA_UPDATED
      case UpdateReasonMapper.BACKFILL_FAILED_REASON:
        return UpdateReason.BACKFILL_FAILED
      case UpdateReasonMapper.BACKFILL_TIMED_OUT_REASON:
        return UpdateReason.BACKFILL_TIMED_OUT
      case UpdateReasonMapper.BACKFILL_CANCELLED_REASON:
        return UpdateReason.BACKFILL_CANCELLED
      default:
        return UpdateReason.UNKNOWN
    }
  }

  public static GetNameForUpdateReason(value: UpdateReason): string {
    switch (value) {
      case UpdateReason.MATCHMAKING_DATA_UPDATED:
        return UpdateReasonMapper.MATCHMAKING_DATA_UPDATED_REASON
      case UpdateReason.BACKFILL_FAILED:
        return UpdateReasonMapper.BACKFILL_FAILED_REASON
      case UpdateReason.BACKFILL_TIMED_OUT:
        return UpdateReasonMapper.BACKFILL_TIMED_OUT_REASON
      case UpdateReason.BACKFILL_CANCELLED:
        return UpdateReasonMapper.BACKFILL_CANCELLED_REASON
      default:
        return UpdateReasonMapper.UNKNOWN_REASON
    }
  }
}
