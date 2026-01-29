"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingController = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const rxjs_1 = require("rxjs");
const ranking_cache_service_1 = require("./ranking-cache/ranking-cache.service");
const events_constants_1 = require("../events/events.constants");
let RankingController = class RankingController {
    emitter;
    cache;
    constructor(emitter, cache) {
        this.emitter = emitter;
        this.cache = cache;
    }
    sse(req) {
        return new rxjs_1.Observable((subscriber) => {
            const handler = (payload) => subscriber.next({ data: payload });
            this.emitter.on(events_constants_1.EVENTS.RANKING_UPDATED, handler);
            req.on('close', () => {
                this.emitter.removeListener(events_constants_1.EVENTS.RANKING_UPDATED, handler);
                subscriber.complete();
            });
        });
    }
    getRanking() {
        return this.cache.getRanking();
    }
    seed(players) {
        this.cache.setRanking(players);
        return { ok: true, count: players.length };
    }
};
exports.RankingController = RankingController;
__decorate([
    (0, common_1.Sse)('events'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], RankingController.prototype, "sse", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "getRanking", null);
__decorate([
    (0, common_1.Post)('seed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], RankingController.prototype, "seed", null);
exports.RankingController = RankingController = __decorate([
    (0, common_1.Controller)('ranking'),
    __metadata("design:paramtypes", [event_emitter_1.EventEmitter2,
        ranking_cache_service_1.RankingCacheService])
], RankingController);
//# sourceMappingURL=ranking.controller.js.map