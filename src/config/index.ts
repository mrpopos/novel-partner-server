/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-11 11:47:25
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-11 13:16:43
 * @FilePath: \web\novel-partner-server\src\config\index.ts
 * @Description: 配置文件入口
 */
import development from './env.development';
import production from './env.production';

const config = { development, production };

const env = config[process.env.NODE_ENV || 'development'];

export { env };
