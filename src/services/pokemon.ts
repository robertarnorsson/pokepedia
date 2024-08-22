
import axios from 'axios';
import { Pokemon } from '../types/package';
import { BASE_URL } from '../../pokepedia.config';

/**
 * Fetches Pokémon data from PokeAPI.
 * @param identifier The Pokémon's name or ID.
 * @returns The Pokémon data, or null if not found.
  */
export async function fetchPokemonData(identifier: string | number): Promise<Pokemon | null> {
  try {
    const response = await axios.get<Pokemon>(`${BASE_URL}/pokemon/${identifier}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon data: ${error}`);
    return null;
  }
}
