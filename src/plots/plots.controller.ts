import { Controller, Get, Param } from '@nestjs/common';
import { PlotsService } from './plots.service';

@Controller('plots')
export class PlotsController {
    
    constructor (
        private readonly plotsService: PlotsService
    ) {

    }

    @Get()
    getAllPlots() {
        return this.plotsService.findAllPlots()
    }

    @Get(':id')
    getPlotById(@Param('id')id:string) {
        console.log({id})
       return this.plotsService.findOneById(+id)
    }
}
