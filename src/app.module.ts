import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActividadesModule } from './actividades/actividades.module';
//import { ActividadesController } from './actividades/actividades.controller';
//import { ActividadesService } from './actividades/actividades.service';
import { DescripcionesModule } from './descripciones/descripciones.module';
import { DescripcionesController } from './descripciones/descripciones.controller';
import { DescripcionesService } from './descripciones/descripciones.service';
@Module({
imports: [MongooseModule.forRoot('mongodb+srv://rinfantediaz51:4b5RfFnYJECO3ojD@cluster0.ilqgxpv.mongodb.net/?retryWrites=true&w=majority'),
 ActividadesModule, DescripcionesModule,
],
 controllers: [AppController, DescripcionesController ],
providers: [AppService,, DescripcionesService],
})
export class AppModule {}