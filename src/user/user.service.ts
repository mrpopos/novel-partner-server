/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-14 16:06:58
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-19 16:24:13
 * @FilePath: \web\novel-partner-server\src\user\user.service.ts
 * @Description: user service
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { name } = createUserDto;

      const existUser = await this.userRepository.findOne({
        where: {
          name,
        },
      });

      if (existUser) {
        throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
      }

      const newUser = await this.userRepository.create(createUserDto);
      await this.userRepository.save(newUser);
      return this.userRepository.findOne({
        where: { name },
      });
    } catch (error) {
      console.log('api /user/create', error);
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(name: string): Promise<User> {
    return this.userRepository.findOne({ where: { name } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
