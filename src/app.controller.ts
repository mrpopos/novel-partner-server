/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-20 16:20:37
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 17:41:21
 * @FilePath: \web\novel-partner-server\src\app.controller.ts
 * @Description: App Controller
 */
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './common/guards/local-auth.guard';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './common/decorators/public.decorator';

@Controller('cy-api/user')
export class AppController {
  constructor(private authService: AuthService) {}
  // 第一种情况：策略直接传递给AuthGuard('local')
  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req) {
  //   // return req.user;
  //   return this.authService.login(req.user);
  // }

  // 第二种情况：策略直接传递给自建类
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('info')
  getProfile(@Request() req) {
    return req.user;
  }
}
