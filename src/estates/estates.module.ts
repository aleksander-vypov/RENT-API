import { Module } from '@nestjs/common';
import { EstateController } from './estates.controller';
import { EstateService } from './estates.service';
import { User } from 'src/users/users.model';
import { Estate } from './estates.model';

@Module({
  controllers: [EstateController],
  providers: [EstateService],
  imports: [User, Estate],
})
export class EstateModule {}
