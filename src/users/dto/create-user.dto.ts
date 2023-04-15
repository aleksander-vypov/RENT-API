import { ApiProperty } from '@nestjs/swagger';

export class UserLogin {
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: 'pass123!', description: 'Password' })
  readonly password: string;
}

export class CreateUserDto extends UserLogin {
  // @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  // readonly email: string;

  // @ApiProperty({ example: 'pass123!', description: 'Password' })
  // readonly password: string;

  @ApiProperty({ example: 'owner', description: 'Role' })
  readonly role: string;
}
