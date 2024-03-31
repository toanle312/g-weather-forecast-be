import { MailModule } from '@/mail/mail.module';
import { VerifiedEmailsModule } from '@/verified-emails/verified-emails.module';
import { Module } from '@nestjs/common';
import { ScheduleMailService } from './schedule-mail.service';
import { WeatherModule } from '@/weather/weather.module';

@Module({
  imports: [MailModule, VerifiedEmailsModule, WeatherModule],
  providers: [ScheduleMailService],
  exports: [ScheduleMailService],
})
export class ScheduleMailModule {}
