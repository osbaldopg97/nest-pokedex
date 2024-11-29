import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//Registros de una tabla
@Schema()
export class Pokemon extends Document{
    //id: string //MongoDb me lo da, el indentificador único

    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    
    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );