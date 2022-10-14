/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-11 11:31:06
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-12 09:52:10
 * @FilePath: \web\novel-partner-server\src\modules\users\entity\users.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TestUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
