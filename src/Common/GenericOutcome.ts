import { GameLiftError } from './GameLiftErrors'

export class GenericOutcome {
  public Error?: GameLiftError
  public Success: boolean

  constructor(error?: GameLiftError) {
    if (error === undefined) {
      this.Success = true
    } else {
      this.Error = error
      this.Success = false
    }
  }
}
