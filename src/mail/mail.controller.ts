import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { UserDTO } from '@/dto/user-dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('subcribe')
  sendMail(@Body() user: UserDTO) {
    return this.mailService.sendMail(user);
  }
  @Delete('unsubcribe/:email')
  unsubcribe(@Param('email') email: string) {
    return this.mailService.unsubcribe(email);
  }
}
