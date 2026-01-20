import { EventEmitter2 } from '@nestjs/event-emitter';
export type RankingUpdatedPayload = {
    ranking: unknown;
};
export declare class RankingEventsService {
    private readonly emitter;
    constructor(emitter: EventEmitter2);
    emitRankingUpdated(payload: RankingUpdatedPayload): void;
}
