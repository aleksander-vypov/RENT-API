import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString, IsEmail } from 'class-validator';

export class UserLogin {
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'pass123!', description: 'Password' })
  @Length(8, 20, {
    message: 'Must be at least 8 and no more than 20 characters',
  })
  readonly password: string;
}

export class CreateUserDto extends UserLogin {
  @ApiProperty({ example: 'owner', description: 'Role' })
  readonly role: string;
}
