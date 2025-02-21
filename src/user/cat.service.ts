
import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cat.interface';


@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(newcat: Cat) {
   this.cats.push(newcat);
   return newcat
   
  }

  findAll(): Cat[] {
    return this.cats;
  }

}
