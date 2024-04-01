import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { env } from '@/configs/environment';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async makeServerStillAlive() {
    await axios.get(env.APP_URL);
  }
}
