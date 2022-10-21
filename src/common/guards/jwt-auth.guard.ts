/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-20 18:22:13
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 10:11:24
 * @FilePath: \web\novel-partner-server\src\auth\jwt-auth.guard.ts
 * @Description: jwt-auth guard
 */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    return super.canActivate(context);
  }
}
