import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface EstateCreationAttrs {
  rooms: string;
  checkOut: string;
  checkIn: string;
  isRented: boolean;
  address: string;
  isDailyRent: boolean;
  pricePerDay: number;
  pricePerMonth: number;
  floor: number;
  totalArea: number;
  bathRooms: number;
  ownerId: number;
  managerId: number;
}

@Table({ tableName: 'estates' })
export class Estate extends Model<Estate, EstateCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Estate id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '3', description: 'Owner id' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ownerId: number;

  @ApiProperty({ example: '2', description: 'Managerer id' })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  managerId: number;

  @ApiProperty({ example: '3', description: 'How many rooms' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rooms: number;

  @ApiProperty({ example: '2', description: 'How many bathrooms' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  bathRooms: number;

  @ApiProperty({ example: '25', description: 'Total area м²' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalArea: number;

  @ApiProperty({ example: '5', description: 'Floor' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  floor: number;

  @ApiProperty({ example: '500', description: 'Price per month 500$' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pricePerMonth: number;

  @ApiProperty({ example: '500', description: 'Price per day 200$' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pricePerDay: number;

  @ApiProperty({
    example: 'true',
    description: 'Apartment can be rented daily',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDailyRent: boolean;

  @ApiProperty({
    example: 'Улица Пушкина, дом Колотушкина',
    description: 'Address',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: 'owner', description: 'Role, owner or manager' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isRented: boolean;

  @ApiProperty({ example: 'date', description: 'Check-in date' })
  @Column({
    type: DataType.DATE,
  })
  checkIn: string;

  @ApiProperty({ example: 'date', description: 'Check-out date' })
  @Column({
    type: DataType.DATE,
  })
  checkOut: string;

  @BelongsTo(() => User)
  user: User;
}
