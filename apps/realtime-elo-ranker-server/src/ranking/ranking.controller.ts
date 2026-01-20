import { Controller, MessageEvent, Sse, Req } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';
import { EVENTS } from '../events/events.constants';

@Controller('ranking')
export class RankingController {
  constructor(private readonly emitter: EventEmitter2) {}

  @Sse('events')
  sse(@Req() req: any): Observable<MessageEvent> {
    return new Observable<MessageEvent>((subscriber) => {
      const handler = (payload: any) => {
        subscriber.next({ data: payload });
      };

      this.emitter.on(EVENTS.RANKING_UPDATED, handler);

      req.on('close', () => {
        this.emitter.removeListener(EVENTS.RANKING_UPDATED, handler);
        subscriber.complete();
      });
    });
  }
}
