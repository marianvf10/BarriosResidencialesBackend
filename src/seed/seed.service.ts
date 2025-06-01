import { Injectable } from '@nestjs/common';
import { PLOTS_SEED } from './data/plots.seed';
import { PERSONAS_SEED } from './data/personas.seed';
import { PlotsService } from 'src/plots/plots.service';

@Injectable()
export class SeedService {
   constructor(
    private readonly plotService: PlotsService,
    // private readonly brandsService: BrandsService,
  ) {}
 
  populateDatabase() {
    this.plotService.fillPlotsWithSeedData(PLOTS_SEED)
    return 'SEED executed'
  }
}
