/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-11 10:37:38
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-12 16:58:29
 * @FilePath: \web\novel-partner-server\src\modules\users\interfaces\users.interface.ts
 * @Description: user interface
 */
export interface IUserInfo {
  code: number;
  succ: boolean;
  msg: string;
  data: {
    token: string;
  };
}
