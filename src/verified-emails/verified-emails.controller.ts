import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { VerifiedEmailsService } from './verified-emails.service';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { env } from '@/configs/environment';

@Controller('verified-emails')
export class VerifiedEmailsController {
  constructor(private readonly verifiedEmailsService: VerifiedEmailsService) {}

  @Post()
  create(@Body() createVerifiedEmailDto: Prisma.VerifiedEmailCreateInput) {
    return this.verifiedEmailsService.create(createVerifiedEmailDto);
  }

  @Get()
  findAll() {
    return this.verifiedEmailsService.findAll();
  }

  @Get('verify/:email')
  verify(@Param('email') email: string, @Res() response: Response) {
    this.verifiedEmailsService.verify(email);
    response.redirect(`${env.CLIENT_URL}/subcribe`);
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.verifiedEmailsService.findOne(email);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.verifiedEmailsService.remove(email);
  }
}
