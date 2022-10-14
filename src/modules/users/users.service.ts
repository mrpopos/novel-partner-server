/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-08 14:06:24
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-12 14:45:34
 * @FilePath: \web\novel-partner-server\src\modules\users\users.service.ts
 * @Description: service users
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestUser } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(TestUser)
    private usersRepository: Repository<TestUser>,
  ) {}

  findAll(): Promise<TestUser[]> {
    return this.usersRepository.find();
  }

  findOne(name: string): Promise<TestUser[]> {
    return this.usersRepository
      .createQueryBuilder('testUser')
      .where('testUser.name LIKE :param')
      .setParameters({
        param: `%${name}%`,
      })
      .orderBy('testUser.id', 'DESC')
      .getMany();
  }
}
