/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-10 17:12:00
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-12 10:00:01
 * @FilePath: \web\novel-partner-server\src\modules\users\users.module.ts
 * @Description: UserModule Class
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TestUser } from './entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
