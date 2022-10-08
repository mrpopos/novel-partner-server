/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 11:48:08
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 15:31:07
 * @FilePath: \web\novel-partner-server\src\app.module.ts
 * @Description: 应用程序的根模块
 */
import { Module } from '@nestjs/common';
// Controller
import { AppController } from './modules/app/app.controller';
import { UsersController } from './modules/users/users.controller';
// Service
import { AppService } from './modules/app/app.service';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
