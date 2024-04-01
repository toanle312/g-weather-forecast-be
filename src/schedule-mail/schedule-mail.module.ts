import { MailModule } from '@/mail/mail.module';
import { VerifiedEmailsModule } from '@/verified-emails/verified-emails.module';
import { Module } from '@nestjs/common';
import { ScheduleMailService } from './schedule-mail.service';
import { WeatherModule } from '@/weather/weather.module';
import { AppService } from '@/app.service';

@Module({
  imports: [MailModule, VerifiedEmailsModule, WeatherModule],
  providers: [ScheduleMailService, AppService],
  exports: [ScheduleMailService],
})
export class ScheduleMailModule {}
