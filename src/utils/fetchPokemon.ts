import randomPokemon from "@/src/utils/randomPokemon";
import { baseStatsType, pokedexDataType, WrongPokemonNameError } from './pokemonInformation.types';

const fetchPokemon = async () => {

    const rndPokemonName = randomPokemon()

    try {
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${rndPokemonName}`);
      if (!r.ok) {
        if (r.status == 404) {
          throw new WrongPokemonNameError(); // melhorar erros
        }
        throw Error("PokeAPI server error.");
      }

      const data = await r.json();

      const statsData: Record<string, number> = data["stats"].reduce(
        (acc: any, statObj: any) => {
          const statName: string = statObj.stat.name;
          acc[statName] = statObj.base_stat;
          return acc;
        },
        {}
      );

      const total = Object.values(statsData).reduce(
        (acc, stat) => acc + stat,
        0
      );
      const baseStats: baseStatsType = {
        total,
        hp: statsData["hp"],
        attack: statsData["attack"],
        defense: statsData["defense"],
        special_attack: statsData["special-attack"],
        special_defense: statsData["special-defense"],
        speed: statsData["speed"],
      };

      const pokedexData: pokedexDataType = {
        id: data.id,

        types: data.types.reduce(
          (acc: string[], typeObj: any) => [...acc, typeObj.type.name],
          []
        ),

        height: data.height / 10,
        weight: data.weight / 10,

        abilities: data.abilities.reduce(
          (acc: string[], abilityObj: any) => [...acc, abilityObj.ability.name],
          []
        ),
      };

      const pokemonImageLink = data.sprites.front_default

      return {
        baseStats,
        pokedexData,
        pokemonImageLink
      };
    } catch (error) {
      throw error;
    }
  };

export default fetchPokemon