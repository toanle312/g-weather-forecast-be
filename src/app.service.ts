import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      statusCode: '200',
      message: 'Your API is ready to use',
    };
  }
}
