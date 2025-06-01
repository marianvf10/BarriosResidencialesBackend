import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PlotsModule } from 'src/plots/plots.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[PlotsModule]
})
export class SeedModule {}
