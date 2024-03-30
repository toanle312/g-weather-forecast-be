import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleMailService } from './schedule-mail.service';

describe('ScheduleMailService', () => {
  let service: ScheduleMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleMailService],
    }).compile();

    service = module.get<ScheduleMailService>(ScheduleMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
