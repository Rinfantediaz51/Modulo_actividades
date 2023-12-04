import { Module } from '@nestjs/common';
import { ActividadesController } from './actividades.controller';
import { ActividadesService } from './actividades.service';
import { ActividadesSchema } from './schemas/actividades.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Actividades', schema: ActividadesSchema}])],
  controllers: [ActividadesController],
  providers: [ActividadesService],
})
export class ActividadesModule {}
