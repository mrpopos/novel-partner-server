/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 11:48:08
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-13 09:41:59
 * @FilePath: \web\novel-partner-server\src\app.module.ts
 * @Description: 应用程序的根模块
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users/users.module';
import { env } from './config/index';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG), UsersModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
