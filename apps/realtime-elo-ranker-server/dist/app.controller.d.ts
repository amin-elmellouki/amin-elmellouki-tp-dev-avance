import { RankingEventsService } from './events/ranking-events/ranking-events.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly rankingEvents;
    constructor(appService: AppService, rankingEvents: RankingEventsService);
    getHello(): string;
    testEmit(): {
        ok: boolean;
    };
}
