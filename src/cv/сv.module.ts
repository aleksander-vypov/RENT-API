import { Module } from '@nestjs/common';
import { СurriculumsController } from './сv.controller';
import { СurriculumsService } from './сv.service';
import { User } from 'src/users/users.model';
import { CV } from './cv.model';

@Module({
  controllers: [СurriculumsController],
  providers: [СurriculumsService],
  imports: [User, CV],
})
export class СurriculumsModule {}
