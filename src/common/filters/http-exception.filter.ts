/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-19 15:58:50
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 12:07:59
 * @FilePath: \web\novel-partner-server\src\common\filters\http-exception.filter.ts
 * @Description: filter http-exception
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      time: new Date().toLocaleString(),
      path: request.url,
      code: status,
      succ: false,
      msg: exception.message,
    });
  }
}
