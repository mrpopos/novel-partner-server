import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: tushaolong 1213167844@qq.com
 * @Date: 2022-10-14 16:06:58
 * @LastEditors: tushaolong 1213167844@qq.com
 * @LastEditTime: 2022-10-19 14:10:49
 * @FilePath: \web\novel-partner-server\src\user\dto\create-user.dto.ts
 * @Description: create-user class dto
 */
export class CreateUserDto {
  @ApiProperty({ required: false })
  id?: number;

  @ApiProperty()
  role_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  create_time: Date;

  @ApiProperty()
  update_time?: Date;
}
