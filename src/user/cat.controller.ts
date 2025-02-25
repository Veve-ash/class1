
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cat.service';
import { UserDto } from 'src/dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post("createcat")
  async create( @Body() cat: UserDto ) {
   return await this.catsService.create(cat)
  }
  @Get("getcats")
  async findAll() {
    return this.catsService.findAll();
  }
}
//handling incoming http requests and sending out responses, they also handle routes