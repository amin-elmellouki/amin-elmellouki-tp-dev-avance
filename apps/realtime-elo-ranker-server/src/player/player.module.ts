import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from './player.entity';
import { PlayerRepositoryService } from './player-repository/player-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  providers: [PlayerRepositoryService],
  exports: [PlayerRepositoryService],
})
export class PlayerModule {}
