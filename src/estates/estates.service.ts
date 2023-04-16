import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Estate } from './estates.model';
import { CreateEstateDto } from './dto/create-estate.dto';

@Injectable()
export class EstateService {
  constructor(@InjectModel(Estate) private estateRepository: typeof Estate) {}

  async create(dto: CreateEstateDto) {
    const estate = await this.estateRepository.create(dto);
    return estate;
  }

  async delete(dto: CreateEstateDto) {
    
    
  }

  async update(dto: CreateEstateDto) {
    
    
  }

  async getAll() {
    const estates = await this.estateRepository.findAll();
    return estates;
  }

}
