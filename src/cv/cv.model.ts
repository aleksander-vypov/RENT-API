import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface CVCreationAttrs {
  about: string;
  experience: number;
  age: number;
}

@Table({ tableName: 'cvs' })
export class CV extends Model<CV, CVCreationAttrs> {
  @ApiProperty({ example: 1, description: 'User id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '3', description: 'User id' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ApiProperty({
    example: 'Hello! I am manager',
    description: 'About yourself',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  about: string;

  @ApiProperty({ example: '10', description: 'Years of experience' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  experience: number;

  @ApiProperty({ example: '20', description: 'Age' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  age: number;

  @BelongsTo(() => User)
  user: User;
}
