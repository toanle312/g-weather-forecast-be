import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { VerifiedEmailsModule } from './verified-emails/verified-emails.module';
import { ScheduleMailModule } from './schedule-mail/schedule-mail.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleMailController } from './schedule-mail/schedule-mail.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    WeatherModule,
    MailModule,
    DatabaseModule,
    VerifiedEmailsModule,
    ScheduleMailModule,
  ],
  controllers: [AppController, ScheduleMailController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
