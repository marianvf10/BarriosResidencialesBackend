import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePlotDto, UpdatePlotDto } from './dto';
import { Plot } from './entities/plot.entity';
@Injectable()
export class PlotsService {
  private plots: Plot[] = [
    // {
    //   id: uuid(),
    //   numero_lote: 1,
    //   frente: 10,
    //   fondo: 20,
    //   titular: 'Mariano Vergara',
    // },
    // {
    //   id: uuid(),
    //   numero_lote: 2,
    //   frente: 10,
    //   fondo: 20,
    //   titular: 'Mariano Vergara',
    // },
    // {
    //   id: uuid(),
    //   numero_lote: 3,
    //   frente: 10,
    //   fondo: 20,
    //   titular: 'Mariano Vergara',
    // },
  ];

  findAllPlots() {
    return this.plots;
  }

  findOneById(id: string) {
    const plot = this.plots.find((plot) => plot.id === id);
    if (!plot) throw new NotFoundException(`Plot with id ${id} not found`);
    return plot;
  }

  create(createPlotDto: CreatePlotDto) {
    const newPlot = {
      id: uuid(),
      ...createPlotDto,
    };
    this.plots.push(newPlot);
    return newPlot;
  }

  update(id: string, updatePlotDto: UpdatePlotDto) {
    let plotDB = this.findOneById(id);

    if (updatePlotDto.id && updatePlotDto.id !== id)
      throw new BadRequestException('Car id is not valid inside body');

    this.plots.map((plot) => {
      if (plot.id === id) {
        plotDB = { ...plotDB, ...updatePlotDto, id };
        return plotDB;
      }
      return plot;
    });
    return plotDB; //lote actualizado
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.plots = this.plots.filter((car) => car.id !== id);
  }

   fillPlotsWithSeedData(plots: Plot[]) {
      this.plots = plots;
    }
}
