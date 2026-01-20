import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EVENTS } from '../events.constants';

export type RankingUpdatedPayload = {
  ranking: unknown;
};

@Injectable()
export class RankingEventsService {
  constructor(private readonly emitter: EventEmitter2) {}

  emitRankingUpdated(payload: RankingUpdatedPayload) {
    this.emitter.emit(EVENTS.RANKING_UPDATED, payload);
  }
}
