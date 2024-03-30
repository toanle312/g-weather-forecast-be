import { UserDTO } from '@/dto/user-dto';
import { VerifiedEmailsService } from '@/verified-emails/verified-emails.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { env } from '@/configs/environment';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly verifiedEmailsService: VerifiedEmailsService,
  ) {}

  async sendMail(user: UserDTO) {
    const email = await this.verifiedEmailsService.findOne(user.email);
    if (!email) {
      await this.verifiedEmailsService.create(user);
    } else if (email.verifiedAt) {
      return {
        notice: 'Your email was subcribed !!!',
      };
    }

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to G Weather Forecast - Confirm your Email',
      template: 'confirmation',
      context: {
        email: user.email,
        url: `${env.APP_URL}/verified-emails/verify/${user.email}`,
      },
    });



    return {
      notice:
        'Send email successfully, please check your mail box to confirm !!!',
    };
  }
}
