import { Controller, Get } from '@nestjs/common';
import { RankingEventsService } from './events/ranking-events/ranking-events.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rankingEvents: RankingEventsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-emit')
  testEmit() {
    this.rankingEvents.emitRankingUpdated({ ranking: { hello: 'world' } });
    return { ok: true };
  }
}
