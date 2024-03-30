import { MailModule } from '@/mail/mail.module';
import { VerifiedEmailsModule } from '@/verified-emails/verified-emails.module';
import { Module } from '@nestjs/common';
import { ScheduleMailService } from './schedule-mail.service';

@Module({
  imports: [MailModule, VerifiedEmailsModule],
  providers: [ScheduleMailService],
  exports: [ScheduleMailService],
})
export class ScheduleMailModule {}
