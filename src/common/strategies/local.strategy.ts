/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-20 16:10:45
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 11:55:56
 * @FilePath: \web\novel-partner-server\src\auth\local.strategy.ts
 * @Description: local strategy 身份验证
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
