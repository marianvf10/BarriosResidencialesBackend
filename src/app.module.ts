import { Module } from '@nestjs/common';
import { PlotsModule } from './plots/plots.module';


@Module({
  imports: [PlotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
