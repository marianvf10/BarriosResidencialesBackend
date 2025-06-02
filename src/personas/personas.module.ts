import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema } from './entities/persona.entity';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService],
  imports:[MongooseModule.forFeature([{name: Persona.name,schema: PersonaSchema}])]
})
export class PersonasModule {}
