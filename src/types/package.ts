
export interface Pokemon {
  id: string;
  name: string;
  weight: number;
  species: Species;
  types: Type[];
}

export type Species = {
  id: string;
  name: string;
  color: string;
  capture_rate: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
};

export type Type = {
  id: string;
  name: PokemonType;
}

export type PokemonType = 
  "fire"
| "water"
| "grass"
| "electric"
| "ghost"
| "dark"
| "psychic"
| "fairy"
| "normal"
| "rock"
| "ground"
| "steel"
| "ice"
| "dragon"
| "fighting"
| "flying"
| "poison"
| "bug";

export type Nature = 
  "hardy"
| "lonely"
| "adamant"
| "naughty"
| "brave"
| "bold"
| "docile"
| "impish"
| "lax"
| "relaxed"
| "modest"
| "mild"
| "bashful"
| "rash"
| "quiet"
| "calm"
| "gentle"
| "careful"
| "quirky"
| "sassy"
| "timid"
| "hasty"
| "jolly"
| "naive"
| "serious";