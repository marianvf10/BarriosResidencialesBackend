import { IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;

  @IsString()
  numDocumento: string;
  @IsString()
  celular: string;

    @IsString()
  telefono: string;
  @IsString()
  email: string;
}
