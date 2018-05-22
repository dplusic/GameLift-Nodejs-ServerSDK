import { Player } from "./Player";

	export class StartMatchBackfillRequest {
		public TicketId?: string;
		public GameSessionArn?: string;
		public MatchmakingConfigurationArn?: string;
		public Players?: Player[];
	}
