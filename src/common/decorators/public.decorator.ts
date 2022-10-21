/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-21 10:05:18
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 10:06:53
 * @FilePath: \web\novel-partner-server\src\common\decorators\public.decorator.ts
 * @Description: Public Decorator
 */
import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);
