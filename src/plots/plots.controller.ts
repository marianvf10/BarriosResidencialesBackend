import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlotsService } from './plots.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';

@Controller('plots')
export class PlotsController {
  constructor(private readonly plotsService: PlotsService) {}

  @Get()
  getAllPlots() {
    return this.plotsService.findAllPlots();
  }

  @Get(':id')
  getPlotById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.plotsService.findOneById(id);
  }
  @Post()
  createPlot(@Body() createPlotDTO: CreatePlotDto) {
    return this.plotsService.create(createPlotDTO);
  }
  @Patch(':id')
  updatePlot(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdatePlotDto,
  ) {
    return this.plotsService.update(id, body);
  }
   @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.plotsService.delete( id )
  }
}
