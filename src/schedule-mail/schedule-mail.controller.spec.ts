import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleMailController } from './schedule-mail.controller';

describe('ScheduleMailController', () => {
  let controller: ScheduleMailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleMailController],
    }).compile();

    controller = module.get<ScheduleMailController>(ScheduleMailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
