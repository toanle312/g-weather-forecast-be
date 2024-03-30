import { Module } from '@nestjs/common';
import { VerifiedEmailsService } from './verified-emails.service';
import { VerifiedEmailsController } from './verified-emails.controller';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VerifiedEmailsController],
  providers: [VerifiedEmailsService],
  exports: [VerifiedEmailsService],
})
export class VerifiedEmailsModule {}
