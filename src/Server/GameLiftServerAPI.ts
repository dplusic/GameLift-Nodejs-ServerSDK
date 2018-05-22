import { AwsStringOutcome } from "../Common/AwsStringOutcome";
import { GenericOutcome } from "../Common/GenericOutcome";
import { ServerState } from "./ServerState";
import { ProcessParameters } from "./ProcessParameters";
import { PlayerSessionCreationPolicy } from "./Model/PlayerSessionCreationPolicy";
import { AwsLongOutcome } from "../Common/AwsLongOutcome";
import { DescribePlayerSessionsRequest } from "./Model/DescribePlayerSessionsRequest";
import { DescribePlayerSessionsOutcome } from "../Common/DescribePlayerSessionsOutcome";
import { StartMatchBackfillRequest } from "./Model/StartMatchBackfillRequest";
import { StartMatchBackfillOutcome } from "../Common/StartMatchBackfillOutcome";
import { StopMatchBackfillRequest } from "./Model/StopMatchBackfillRequest";

export class GameLiftServerAPI {
  static sdkVersion: string = '3.2.1'

  public static GetSdkVersion(): AwsStringOutcome {
    return new AwsStringOutcome(GameLiftServerAPI.sdkVersion)
  }

  public static InitSDK(): GenericOutcome {
    return ServerState.Instance.InitializeNetworking()
  }

  public static ProcessReady(processParameters: ProcessParameters): Promise<GenericOutcome> {
    return ServerState.Instance.ProcessReady(processParameters)
  }

  public static ProcessEnding(): Promise<GenericOutcome> {
    return ServerState.Instance.ProcessEnding()
  }

  public static ActivateGameSession(): Promise<GenericOutcome> {
    return ServerState.Instance.ActivateGameSession()
  }

  public static TerminateGameSession(): Promise<GenericOutcome> {
    return ServerState.Instance.TerminateGameSession()
  }

  public static UpdatePlayerSessionCreationPolicy(
    playerSessionPolicy: PlayerSessionCreationPolicy
  ): Promise<GenericOutcome> {
    return ServerState.Instance.UpdatePlayerSessionCreationPolicy(playerSessionPolicy)
  }

  public static GetGameSessionId(): AwsStringOutcome {
    return ServerState.Instance.GetGameSessionId()
  }

  public static GetTerminationTime(): AwsLongOutcome {
    return ServerState.Instance.GetTerminationTime()
  }

  public static AcceptPlayerSession(playerSessionId: string): Promise<GenericOutcome> {
    return ServerState.Instance.AcceptPlayerSession(playerSessionId)
  }

  public static RemovePlayerSession(playerSessionId: string): Promise<GenericOutcome> {
    return ServerState.Instance.RemovePlayerSession(playerSessionId)
  }

  public static DescribePlayerSessions(
    describePlayerSessionsRequest: DescribePlayerSessionsRequest
  ): Promise<DescribePlayerSessionsOutcome> {
    return ServerState.Instance.DescribePlayerSessions(describePlayerSessionsRequest)
  }

  public static StartMatchBackfill(request: StartMatchBackfillRequest): Promise<StartMatchBackfillOutcome> {
    return ServerState.Instance.BackfillMatchmaking(request)
  }

  public static StopMatchBackfill(request: StopMatchBackfillRequest): Promise<GenericOutcome> {
    return ServerState.Instance.StopMatchmaking(request)
  }

  public static Destroy(): GenericOutcome {
    ServerState.Instance.Shutdown()
    return new GenericOutcome()
  }
}
