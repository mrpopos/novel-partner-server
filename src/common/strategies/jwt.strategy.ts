/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-20 18:14:45
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 18:29:40
 * @FilePath: \web\novel-partner-server\src\auth\jwt.strategy.ts
 * @Description: jwt strategy
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from 'src/common/constants/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // console.log('payload', payload);
    const data = {
      code: 200,
      msg: 'get user info successfully',
      data: null,
    };
    data.data = { userId: payload.sub, username: payload.username };
    return data;
  }
}
