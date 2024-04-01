import { Controller } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ScheduleMailService } from './schedule-mail.service';
import { AppService } from '@/app.service';

@Controller('schedule-mail')
export class ScheduleMailController {
  constructor(
    private readonly scheduleMailService: ScheduleMailService,
    private readonly appService: AppService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_6AM)
  sendDailyEmail() {
    this.scheduleMailService.sendDailyEmail();
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  makeServerStillAlive() {
    this.appService.getHello();
  }
}
