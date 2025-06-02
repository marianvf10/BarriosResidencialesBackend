import { Module } from '@nestjs/common';
import { PlotsModule } from './plots/plots.module';
import { PersonasModule } from './personas/personas.module';
import { SeedModule } from './seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsuarioModule } from './usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    PlotsModule, PersonasModule, SeedModule, 
    ServeStaticModule.forRoot({rootPath:join(__dirname,'..','public')}), 
    UsuarioModule,
    MongooseModule.forRoot('mongodb://localhost:27017/barrios-residenciales-backend'),
    CommonModule,
   ],
  controllers: [],
   providers: [],
})
export class AppModule {}
