import { Module } from '@nestjs/common';
import { CatsModule } from './user/cat.module';

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
