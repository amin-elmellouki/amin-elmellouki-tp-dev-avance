import { Module } from '@nestjs/common';
import { RankingCacheService } from './ranking-cache/ranking-cache.service';
import { RankingController } from './ranking.controller';

@Module({
  controllers: [RankingController],
  providers: [RankingCacheService],
})
export class RankingModule {}
