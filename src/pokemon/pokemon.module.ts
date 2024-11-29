import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  //Si tenemos mas modelos o identidades, las agregamos. siempre y cuando sea de Pokemon
  imports:[
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      }
    ])
  ]
})
export class PokemonModule {}
