/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 14:06:24
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 14:26:30
 * @FilePath: \web\novel-partner-server\src\modules\users\users.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  login(): string {
    return 'login success123';
  }
}
