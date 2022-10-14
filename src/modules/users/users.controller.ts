/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 12:27:43
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-14 15:24:13
 * @FilePath: \web\novel-partner-server\src\modules\users\users.controller.ts
 * @Description: users模块
 */
import { Controller, Post, Req, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { IUserInfo } from './dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersServive: UsersService) {}

  @Post('login')
  login(@Req() request: Request): IUserInfo {
    console.log(request.body);
    return {
      code: 200,
      succ: true,
      msg: 'success',
      data: {
        token: 'mrpopos wolton',
      },
    };
  }

  @Post('user/list')
  @HttpCode(200)
  userList(@Req() request: Request) {
    console.log('***', request.body);
    const { inputName } = request.body;
    if (inputName) {
      return this.usersServive.findOne(inputName);
    }
    return this.usersServive.findAll();
  }
}
