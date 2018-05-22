import { GameSession } from "./GameSession";
import { UpdateReason } from "./UpdateReason";

export class UpdateGameSession {
  public GameSession: GameSession
  public UpdateReason: UpdateReason
  public BackfillTicketId: string

  constructor(gameSession: GameSession, updateReason: UpdateReason, backfillTicketId: string) {
    this.GameSession = gameSession
    this.UpdateReason = updateReason
    this.BackfillTicketId = backfillTicketId
  }
}
