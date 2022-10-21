/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-20 17:15:19
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-20 17:17:49
 * @FilePath: \web\novel-partner-server\src\auth\local-auth.guard.ts
 * @Description: local-auth grard
 */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
