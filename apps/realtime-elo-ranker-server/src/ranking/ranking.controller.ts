import { Body, Controller, Get, MessageEvent, Post, Req, Sse } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';

import { RankingCacheService } from './ranking-cache/ranking-cache.service';
import { EVENTS } from '../events/events.constants';
import { PlayerRanking } from './models/player-ranking.model';

@Controller('ranking')
export class RankingController {
  constructor(
    private readonly emitter: EventEmitter2,
    private readonly cache: RankingCacheService,
  ) {}

  @Sse('events')
  sse(@Req() req: any): Observable<MessageEvent> {
    return new Observable<MessageEvent>((subscriber) => {
      const handler = (payload: any) => subscriber.next({ data: payload });

      this.emitter.on(EVENTS.RANKING_UPDATED, handler);

      req.on('close', () => {
        this.emitter.removeListener(EVENTS.RANKING_UPDATED, handler);
        subscriber.complete();
      });
    });
  }

  @Get()
  getRanking() {
    return this.cache.getRanking();
  }

  @Post('seed')
  seed(@Body() players: PlayerRanking[]) {
    this.cache.setRanking(players);
    return { ok: true, count: players.length };
  }
}
