/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 11:48:08
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 12:03:56
 * @FilePath: \web\novel-partner-server\src\app.service.ts
 * @Description: 具有单一方法的基本服务
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
