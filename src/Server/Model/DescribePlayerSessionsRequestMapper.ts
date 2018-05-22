import sdk = require('../../Google/Sdk')
import { DescribePlayerSessionsRequest } from './DescribePlayerSessionsRequest'

export class DescribePlayerSessionsRequestMapper {
  public static ParseFromDescribePlayerSessionsRequest(
    request: DescribePlayerSessionsRequest
  ): sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest {
    const pRequest = new sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest()
    if (null != request.GameSessionId) {
      pRequest.gameSessionId = request.GameSessionId
    }
    if (null != request.PlayerId) {
      pRequest.playerId = request.PlayerId
    }
    if (null != request.PlayerSessionId) {
      pRequest.playerSessionId = request.PlayerSessionId
    }
    if (null != request.PlayerSessionStatusFilter) {
      pRequest.playerSessionStatusFilter = request.PlayerSessionStatusFilter
    }
    if (null != request.NextToken) {
      pRequest.nextToken = request.NextToken
    }
    pRequest.limit = request.Limit
    return pRequest
  }
}
