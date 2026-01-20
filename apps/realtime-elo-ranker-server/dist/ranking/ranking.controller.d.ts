import { MessageEvent } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';
export declare class RankingController {
    private readonly emitter;
    constructor(emitter: EventEmitter2);
    sse(req: any): Observable<MessageEvent>;
}
