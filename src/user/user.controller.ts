/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-14 16:06:58
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 10:20:34
 * @FilePath: \web\novel-partner-server\src\user\user.controller.ts
 * @Description: User Controller
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '用户注册' })
  @ApiResponse({ status: 200, description: '用户注册', type: [User] })
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    const data = {
      succ: true,
      msg: 'create user success',
      data: null,
    };
    createUserDto = {
      id: 3,
      role_id: 1,
      name: 'mrpopos',
      password: 'mrpopos@2063',
      email: 'mrpopos@gmail.com',
      phone: '18894521565',
      create_time: new Date(),
    };
    const createUser = await this.userService.create(createUserDto);
    if (createUser) {
      data.data = createUser;
    } else {
      data.succ = false;
      data.msg = 'create user failure';
    }
    return data;
  }

  @Get('list')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
