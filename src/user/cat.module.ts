
import { Module } from '@nestjs/common';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
