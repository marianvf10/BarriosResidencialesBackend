import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Persona extends Document {
  // id:string; //No se especifica ya que mongo genera automaticamente un id
  @Prop()
  nombre: string;

    @Prop()
  apellido: string;

  @Prop({ unique: true, index: true })
  numDocumento: string;

    @Prop()
  celular: string;

    @Prop()
  telefono: string;

    @Prop()
  email: string;

    @Prop()
  createdAt: number;

    @Prop()
  updatedAt: number;
}

export const PersonaSchema = SchemaFactory.createForClass(Persona);
