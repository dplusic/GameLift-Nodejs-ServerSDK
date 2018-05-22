import { GameLiftError } from "./GameLiftErrors";
import { GenericOutcome } from "./GenericOutcome";
import { DescribePlayerSessionsResult } from "../Server/Model/DescribePlayerSessionsResult";

export class DescribePlayerSessionsOutcome extends GenericOutcome {
  public Result?: DescribePlayerSessionsResult

  constructor(result: DescribePlayerSessionsResult);
  constructor(error: GameLiftError);
  constructor(arg: DescribePlayerSessionsResult | GameLiftError) {
    super(arg instanceof GameLiftError ? arg : undefined)

    if (arg instanceof DescribePlayerSessionsResult) {
      this.Result = arg
    }
  }
}
