import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePlotDto {
  //Escribo las propiedades que estoy esperando recibir del cliente
  //Se aconsejan que los dtos sean readonly para que no pueda ser modificada
  //Se puede escribir como una interfaz el dto, pero sin embargo si a futuro queremos hacer validaciones
  //sobre los campos no se va a poder, por eso es que lo definimos como clase
  @IsString()
  @IsUUID()
  readonly id:string
  @IsNumber()
  readonly numero_lote: number;
  @IsNumber()
  readonly frente: number;
  @IsNumber()
  readonly fondo: number;
  @IsString()
  readonly titular: string;

  @IsString()
  @IsOptional()
  readonly ubicacion?: string;

}
