import { GameLiftError } from "./GameLiftErrors";
import { GenericOutcome } from "./GenericOutcome";
import { StartMatchBackfillResult } from "../Server/Model/StartMatchBackfillResult";

export class StartMatchBackfillOutcome extends GenericOutcome {
  public Result?: StartMatchBackfillResult

  constructor(result: StartMatchBackfillResult);
  constructor(error: GameLiftError);
  constructor(arg: StartMatchBackfillResult | GameLiftError) {
    super(arg instanceof GameLiftError ? arg : undefined)

    if (arg instanceof StartMatchBackfillResult) {
      this.Result = arg
    }
  }
}
