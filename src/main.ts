/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 11:48:08
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-08 12:05:15
 * @FilePath: \web\novel-partner-server\src\main.ts
 * @Description: 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
