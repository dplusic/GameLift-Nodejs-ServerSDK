import { GameLiftError } from './GameLiftErrors'
import { GenericOutcome } from './GenericOutcome'

export class AwsStringOutcome extends GenericOutcome {
  public Result?: string

  constructor(result: string)
  constructor(error: GameLiftError)
  constructor(arg: string | GameLiftError) {
    super(arg instanceof GameLiftError ? arg : undefined)

    if (typeof arg === 'string') {
      this.Result = arg
    }
  }
}
