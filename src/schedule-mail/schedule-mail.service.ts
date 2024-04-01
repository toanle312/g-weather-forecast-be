import { VerifiedEmailsService } from '@/verified-emails/verified-emails.service';
import { WeatherService } from '@/weather/weather.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleMailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly verifiedMailService: VerifiedEmailsService,
    private readonly weatherService: WeatherService,
  ) {}

  async sendDailyEmail() {
    const recipients = await this.verifiedMailService.findAll(); // Add recipients

    for (const recipient of recipients) {
      if (recipient.verifiedAt === null) {
        continue;
      }

      const weather = await this.weatherService.getCurrentWeather(
        recipient.location,
      );

      await this.mailerService.sendMail({
        to: recipient.email,
        subject: 'G Weather Forecast - Daily weather forcast information',
        template: 'information',
        context: {
          email: recipient.email,
          location: weather.location,
          date: weather.date,
          temp: weather.temp,
          wind: weather.wind,
          humidity: weather.humidity,
          condition: weather.condition.text,
        },
      });
    }
  }
}
