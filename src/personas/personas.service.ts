import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PersonasService {
  constructor(
    @InjectModel(Persona.name)
    readonly personaModel: Model<Persona>,
  ) {}
  private personas: Persona[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime()
    // }
  ];
  async create(createPersonaDto: CreatePersonaDto) {
    try {
      const personaCreated = await this.personaModel.create(createPersonaDto);
      return personaCreated;
    } catch (error) {
     this.handleExceptions(error)
    }
  }

  async findAll() {
    return await this.personaModel.find();
  }

  async findOne(term: string) {
    //term se refiere a termino de busqueda
    let persona: Persona | null = null;
    
    if (!isNaN(+term)) { //Si el ID NO es un numero
      persona = await this.personaModel.findOne({telefono:term})
    }

    if (!persona &&  isValidObjectId(term)) {
        persona = await this.personaModel.findById(term)
    }

    if (!persona) {
      persona = await this.personaModel.findOne({numDocumento:term.toLowerCase().trim()})
    }

    if (!persona) {
      throw new NotFoundException(`Persona with id or numDocumento "$${term}" not found`)
    }
    return persona
  }

  async update(term: string, updatePersonaDto: UpdatePersonaDto) {

    const persona = await this.findOne(term) 

    try {
    await persona.updateOne(updatePersonaDto, {new:true})
    return {...persona.toJSON(), updatePersonaDto}
      
    } catch (error) {
       this.handleExceptions(error)
    }


  }

  async remove(id: string) {

    // const persona = await this.findOne(id)
    // await persona.deleteOne()
    const {deletedCount} = await this.personaModel.deleteOne({_id:id})
    if (deletedCount === 0) {
      throw new BadRequestException(`Persona with id "${id} not found`)
    }
    return;
  }

  fillPersonasWithSeedData(personas: Persona[]) {
    this.personas = personas;
  }

  private handleExceptions(error:any) {
     if (error.code === 11000) {
        throw new BadRequestException(`Persona already exists in db with: ${JSON.stringify(error.keyValue)}`)
      }
      console.log('[ERROR]',error)
      throw new InternalServerErrorException(`Can't update Person - Check Server Logs`)
  }
}
