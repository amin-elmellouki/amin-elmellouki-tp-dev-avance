import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RankingEventsService } from './events/ranking-events/ranking-events.service';
import { RankingModule } from './ranking/ranking.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    RankingModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService, RankingEventsService],
})
export class AppModule {}
