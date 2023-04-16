import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { CV } from 'src/cv/cv.model';
import { Estate } from 'src/estates/estates.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

const roles: string[] = ['owner', 'manager'];

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'User id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'First name' })
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'pass123!', description: 'Password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 79999999999, description: 'Phone number' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  phone: number;

  @ApiProperty({ example: 'owner', description: 'Role, owner or manager' })
  @Column({
    type: DataType.ENUM('owner', 'manager'),
    validate: {
      isIn: [roles],
    },
    allowNull: false,
  })
  role: string;

  @HasMany(() => Estate)
  estate: Estate[];

  @HasOne(() => CV)
  cv: CV;
}
