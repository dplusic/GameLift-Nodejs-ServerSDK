export enum GameLiftErrorType {
  SERVICE_CALL_FAILED,
  LOCAL_CONNECTION_FAILED,
  NETWORK_NOT_INITIALIZED,
  GAMESESSION_ID_NOT_SET,
  TERMINATION_TIME_NOT_SET
}

export class GameLiftError {
  public ErrorType: GameLiftErrorType
  public ErrorName: string
  public ErrorMessage: string

  constructor(errorType: GameLiftErrorType) {
    this.ErrorType = errorType
    this.ErrorName = this.GetDefaultNameForErrorType(errorType)
    this.ErrorMessage = this.GetDefaultMessageForErrorType(errorType)
  }

  GetDefaultNameForErrorType(errorType: GameLiftErrorType): string {
    switch (errorType) {
      case GameLiftErrorType.SERVICE_CALL_FAILED:
        return 'Service call failed.'
      case GameLiftErrorType.LOCAL_CONNECTION_FAILED:
        return 'Local connection failed.'
      case GameLiftErrorType.NETWORK_NOT_INITIALIZED:
        return 'Network not initialized.'
      case GameLiftErrorType.GAMESESSION_ID_NOT_SET:
        return 'GameSession id is not set.'
      case GameLiftErrorType.TERMINATION_TIME_NOT_SET:
        return 'TerminationTime is not set.'
      default:
        return 'Unknown Error'
    }
  }

  GetDefaultMessageForErrorType(errorType: GameLiftErrorType): string {
    switch (errorType) {
      case GameLiftErrorType.SERVICE_CALL_FAILED:
        return 'An AWS service call has failed. See the root cause error for more information.'
      case GameLiftErrorType.LOCAL_CONNECTION_FAILED:
        return 'Connection to local agent could not be established.'
      case GameLiftErrorType.NETWORK_NOT_INITIALIZED:
        return 'Local network was not initialized. Have you called InitSDK()?'
      case GameLiftErrorType.GAMESESSION_ID_NOT_SET:
        return 'No game sessions are bound to this process.'
      case GameLiftErrorType.TERMINATION_TIME_NOT_SET:
        return 'TerminationTime has not been sent to this process.'
      default:
        return 'An unexpected error has occurred.'
    }
  }

  toString(): string {
    return `[GameLiftError: ErrorType=${this.ErrorType}, ErrorName=${
      this.ErrorName
    }, ErrorMessage=${this.ErrorMessage}]`
  }
}
