import Long = require('long')
import { GameLiftError } from './GameLiftErrors'
import { GenericOutcome } from './GenericOutcome'

export class AwsLongOutcome extends GenericOutcome {
  public Result?: Long

  constructor(result: Long)
  constructor(error: GameLiftError)
  constructor(arg: Long | GameLiftError) {
    super(arg instanceof GameLiftError ? arg : undefined)

    if (arg instanceof Long) {
      this.Result = arg
    }
  }
}
