import { Test, TestingModule } from '@nestjs/testing';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { RankingEventsService } from './ranking-events.service';

describe('RankingEventsService', () => {
  let service: RankingEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RankingEventsService,
        {
          provide: EventEmitter2,
          useValue: { emit: jest.fn(), on: jest.fn(), removeListener: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<RankingEventsService>(RankingEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
