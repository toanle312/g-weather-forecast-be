import { Test, TestingModule } from '@nestjs/testing';
import { VerifiedEmailsController } from './verified-emails.controller';
import { VerifiedEmailsService } from './verified-emails.service';

describe('VerifiedEmailsController', () => {
  let controller: VerifiedEmailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerifiedEmailsController],
      providers: [VerifiedEmailsService],
    }).compile();

    controller = module.get<VerifiedEmailsController>(VerifiedEmailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
