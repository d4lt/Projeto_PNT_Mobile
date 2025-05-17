export type baseStatsType = {
  total: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
};

export type pokedexDataType = {
  id: number;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
};

export class WrongPokemonNameError extends Error {
    constructor(){
      super("Wrong Pokemon name")
      this.name = "WrongPokemonName"
    };
}