/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-19 16:57:05
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 15:14:52
 * @FilePath: \web\novel-partner-server\src\auth\auth.service.ts
 * @Description: auth service
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    protected jwtService: JwtService,
  ) {}

  async validateUser(username: string, pwd: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      throw new HttpException('用户名错误', HttpStatus.BAD_REQUEST);
    }
    const { password, ...result } = user;
    if (!compareSync(pwd, password)) {
      throw new HttpException('密码错误', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async login(user: any) {
    const data = {
      code: 200,
      msg: 'user login successfully',
      token: null,
    };
    const playload = { username: user.name, sub: user.id };
    const token = this.jwtService.sign(playload);
    data.token = token;
    return data;
  }
}
