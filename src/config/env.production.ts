/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-11 11:47:38
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-11 15:09:41
 * @FilePath: \web\novel-partner-server\src\config\env.development.ts
 * @Description: env.development config
 */
export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3000,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'roznovel_db',
    entities: [],
    autoLoadEntities: false,
    synchronize: false,
    retryAttempts: 3,
    retryDelay: 3000,
  },
};
