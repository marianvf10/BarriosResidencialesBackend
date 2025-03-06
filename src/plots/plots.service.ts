import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PlotsService {
     private plots =[
        {id:1,brand:'Toyoya',model:'Corolla'},
        {id:2,brand:'Honda',model:'Civic'},
        {id:3,brand:'Jeep',model:'Cherokee'}
     ]

      findAllPlots() {
        return this.plots;
     }

      findOneById(id:number) {
        const plot = this.plots.find(plot => plot.id === id);
        if (!plot) throw new NotFoundException(`Plot with id ${id} not found`)
        return plot
     }
     
}
