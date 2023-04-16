import { Controller, Post, Body, Get, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Estate } from './estates.model';
import { CreateEstateDto } from './dto/create-estate.dto';
import { EstateService } from './estates.service';

@Controller('estate')
export class EstateController {
  constructor(private estateService: EstateService) {}

  @ApiOperation({ summary: 'Create estate' })
  @ApiResponse({ status: 200, type: Estate })
  @UsePipes()
  @Post()
  createEstate(@Body() dto: CreateEstateDto) {

  }

}
