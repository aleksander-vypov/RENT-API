import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { EstateModule } from './estates/estates.module';
import { СurriculumsModule } from './cv/сv.module';
import { Estate } from './estates/estates.model';
import { CV } from './cv/cv.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Estate, CV],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    EstateModule,
    СurriculumsModule,
  ],
})
export class AppModule {}
