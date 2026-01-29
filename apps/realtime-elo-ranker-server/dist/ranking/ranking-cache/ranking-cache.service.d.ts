import { PlayerRanking } from '../models/player-ranking.model';
export declare class RankingCacheService {
    private ranking;
    setRanking(ranking: PlayerRanking[]): void;
    getRanking(): PlayerRanking[];
    upsertPlayer(player: PlayerRanking): void;
    updateElo(playerId: string, newElo: number): void;
    private sortRanking;
}
