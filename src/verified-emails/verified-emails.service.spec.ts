import { Test, TestingModule } from '@nestjs/testing';
import { VerifiedEmailsService } from './verified-emails.service';

describe('VerifiedEmailsService', () => {
  let service: VerifiedEmailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifiedEmailsService],
    }).compile();

    service = module.get<VerifiedEmailsService>(VerifiedEmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
