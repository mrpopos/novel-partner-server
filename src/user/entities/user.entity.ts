/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-14 16:06:58
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-21 10:19:24
 * @FilePath: \web\novel-partner-server\src\user\entities\user.entity.ts
 * @Description: user entity
 */
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// const bcrypt = require('bcryptjs');
import { hashSync } from 'bcryptjs';

@Entity('reviewer_partner')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  role_id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 255, select: true })
  password: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  update_time: Date;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await hashSync(this.password, 10);
  }
}
