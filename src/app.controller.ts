import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { MeUser } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user/me')
  getMe(): MeUser {
    return this.appService.getMe();
  }
}
