import {
  Catch,
  HttpException,
  HttpStatus,
  ArgumentsHost,
} from '@nestjs/common';

import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';

type TMyResponse = {
  statusCode: number;
  timestamp: string;
  path: string;
  response: string | object;
};

// Middleware
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const myResponse: TMyResponse = {
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: ' string | object',
    };

    if (exception instanceof HttpException) {
      myResponse.statusCode = exception.getStatus();
      myResponse.response = exception.getResponse();
    } else {
      myResponse.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      myResponse.response = 'Internal Server Error';
    }

    response.status(myResponse.statusCode).json(myResponse);
  }
}
