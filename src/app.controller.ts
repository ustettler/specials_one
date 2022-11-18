import { Controller, Get } from '@nestjs/common';
import type { MeUser } from './app.service';
import { AppService, Article } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user/me')
  getMe(): MeUser {
    return this.appService.getMe();
  }

  @Get('articles')
  getAllArticles(): Article[] {
    return this.appService.getAllArticles();
  }
}
