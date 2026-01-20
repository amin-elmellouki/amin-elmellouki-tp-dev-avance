import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingEventsService } from './events/ranking-events/ranking-events.service';
import { RankingController } from './ranking/ranking.controller';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController, RankingController],
  providers: [AppService, RankingEventsService],
})
export class AppModule {}
