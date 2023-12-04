import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/*sexport interface Actividades extends Document {
    title: string;
    artist: string;
    duration: number;s
}*/
@Schema ({ timestamps: true})
export class Actividades extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    artist: string;

    @Prop({ required: true })
    duration: number;
}

export const ActividadesSchema = SchemaFactory.createForClass(Actividades);


