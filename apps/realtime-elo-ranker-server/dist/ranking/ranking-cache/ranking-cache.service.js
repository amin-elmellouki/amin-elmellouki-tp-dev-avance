"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingCacheService = void 0;
const common_1 = require("@nestjs/common");
let RankingCacheService = class RankingCacheService {
    ranking = [];
    setRanking(ranking) {
        this.ranking = this.sortRanking([...ranking]);
    }
    getRanking() {
        return this.ranking;
    }
    upsertPlayer(player) {
        const idx = this.ranking.findIndex((p) => p.id === player.id);
        if (idx === -1) {
            this.ranking.push(player);
        }
        else {
            this.ranking[idx] = player;
        }
        this.ranking = this.sortRanking(this.ranking);
    }
    updateElo(playerId, newElo) {
        const idx = this.ranking.findIndex((p) => p.id === playerId);
        if (idx === -1)
            return;
        this.ranking[idx] = { ...this.ranking[idx], elo: newElo };
        this.ranking = this.sortRanking(this.ranking);
    }
    sortRanking(list) {
        return [...list].sort((a, b) => b.elo - a.elo || a.id.localeCompare(b.id));
    }
};
exports.RankingCacheService = RankingCacheService;
exports.RankingCacheService = RankingCacheService = __decorate([
    (0, common_1.Injectable)()
], RankingCacheService);
//# sourceMappingURL=ranking-cache.service.js.map