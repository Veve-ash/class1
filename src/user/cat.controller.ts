
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from 'src/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post("createcat")
  async create( @Body() cat: Cat ) {
   return await this.catsService.create(cat)
  }
  @Get("getcats")
  async findAll() {
    return this.catsService.findAll();
  }
}
//handling incoming http requests and sending out responses, they also handle routes