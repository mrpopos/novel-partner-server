/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 11:48:08
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 13:35:22
 * @FilePath: \web\novel-partner-server\src\app.controller.ts
 * @Description: 带有单个路由的基本控制器
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
