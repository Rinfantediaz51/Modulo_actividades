import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Actividades } from './schemas/actividades.schemas';

@Injectable()
export class ActividadesService {
constructor(@InjectModel (Actividades.name) private actividadesModel: Model<Actividades>) {}

async findOne(id: number): Promise<{}> {
const room =  await this.actividadesModel.find().exec();
return room;
}

async findAll(): Promise<Actividades[]> {
    const actividades = await this.actividadesModel.find().exec();
    return actividades;
}

async create(createActividadesDto): Promise<{}> {
const createdActividades = new this.actividadesModel(createActividadesDto);
return createActividadesDto.save();
}

async update(id, updateActividades): Promise<Actividades> {
    const resUpdateActividades = await this.actividadesModel.findByIdAndUpdate(id, updateActividades, {
        new: true,
    });
return resUpdateActividades;
}

async delete(id): Promise<{}> {
    const deleteActividades = await this.actividadesModel.findByIdAndRemove(id);
return deleteActividades;
}
}