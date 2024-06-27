import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Pickfu quiz API version 0.0.1';
  }
}
