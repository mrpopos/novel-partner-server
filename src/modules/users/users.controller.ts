/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 12:27:43
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 14:31:29
 * @FilePath: \web\novel-partner-server\src\modules\users\users.controller.ts
 * @Description: users模块
 */
import { Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServive: UsersService) {}
  @Get()
  info(): string {
    return 'mepopos wolton';
  }

  @Post('login')
  login(): string {
    return this.usersServive.login();
  }
}
