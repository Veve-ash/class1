
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/cat.dto';


@Injectable()
export class CatsService {
  private cats: UserDto[] = [];

  create(newcat: UserDto) {
   this.cats.push(newcat);
   return newcat
   
  }

  findAll(): UserDto[] {
    return this.cats;
  }

}
