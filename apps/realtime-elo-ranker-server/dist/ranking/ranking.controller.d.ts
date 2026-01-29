import { MessageEvent } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';
import { RankingCacheService } from './ranking-cache/ranking-cache.service';
import { PlayerRanking } from './models/player-ranking.model';
export declare class RankingController {
    private readonly emitter;
    private readonly cache;
    constructor(emitter: EventEmitter2, cache: RankingCacheService);
    sse(req: any): Observable<MessageEvent>;
    getRanking(): PlayerRanking[];
    seed(players: PlayerRanking[]): {
        ok: boolean;
        count: number;
    };
}
