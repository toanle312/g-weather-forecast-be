import { env } from '@/configs/environment';
import { VerifiedEmailsService } from '@/verified-emails/verified-emails.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleMailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly verifiedMailService: VerifiedEmailsService,
  ) {}

  async sendDailyEmail() {
    const recipients = await this.verifiedMailService.findAll(); // Add recipients

    for (const recipient of recipients) {
      await this.mailerService.sendMail({
        to: recipient.email,
        subject: 'Welcome to G Weather Forecast - Confirm your Email',
        template: 'confirmation',
        context: {
          email: recipient.email,
          url: `${env.APP_URL}/verified-emails/verify/${recipient.email}`,
        },
      });
    }
  }
}
