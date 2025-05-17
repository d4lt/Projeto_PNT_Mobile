const randomPokemonList = [
  "Pikachu",
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Jigglypuff",
  "Meowth",
  "Psyduck",
  "Snorlax",
  "Eevee",
  "Gengar",
  "Lapras",
  "Magikarp",
  "Dragonite",
  "Lucario",
  "Greninja",
  "Togepi",
  "Mimikyu",
  "Scyther",
  "Gardevoir",
  "Tyranitar"
];

export default function randomPokemon() {
  const rndPokemon = randomPokemonList[Math.floor(Math.random() * randomPokemonList.length)];
  return rndPokemon
}