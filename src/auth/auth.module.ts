/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-19 16:56:52
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 10:24:56
 * @FilePath: \web\novel-partner-server\src\auth\auth.module.ts
 * @Description: Auth service
 */
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/common/strategies/local.strategy';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../common/constants/constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
