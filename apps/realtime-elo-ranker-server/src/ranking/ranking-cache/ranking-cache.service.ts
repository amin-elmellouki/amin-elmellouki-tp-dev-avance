import { Injectable } from '@nestjs/common';
import { PlayerRanking } from '../models/player-ranking.model';

@Injectable()
export class RankingCacheService {
  private ranking: PlayerRanking[] = [];

  /**
   * Remplace totalement le classement en mémoire
   */
  setRanking(ranking: PlayerRanking[]) {
    this.ranking = this.sortRanking([...ranking]);
  }

  /**
   * Retourne le classement courant
   */
  getRanking(): PlayerRanking[] {
    return this.ranking;
  }

  /**
   * Upsert
   */
  upsertPlayer(player: PlayerRanking) {
    const idx = this.ranking.findIndex((p) => p.id === player.id);

    if (idx === -1) {
      this.ranking.push(player);
    } else {
      this.ranking[idx] = player;
    }

    this.ranking = this.sortRanking(this.ranking);
  }

  /**
   * Mise à jour Elo d'un joueur
   */
  updateElo(playerId: string, newElo: number) {
    const idx = this.ranking.findIndex((p) => p.id === playerId);
    if (idx === -1) return;

    this.ranking[idx] = { ...this.ranking[idx], elo: newElo };
    this.ranking = this.sortRanking(this.ranking);
  }

  private sortRanking(list: PlayerRanking[]) {
    return [...list].sort((a, b) => b.elo - a.elo || a.id.localeCompare(b.id));
  }
}
