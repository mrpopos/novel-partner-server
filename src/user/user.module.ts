/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-14 16:06:58
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-19 17:06:34
 * @FilePath: \web\novel-partner-server\src\user\user.module.ts
 * @Description: User Module
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
