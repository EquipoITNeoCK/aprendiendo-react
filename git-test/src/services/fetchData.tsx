import {PokemonData} from '../interfaces/Pokemon.tsx';

export const FetchData = async (setData: (data: PokemonData | null) => void) => {
  try {
    const response = await fetch(import.meta.env.VITE_ENDPOINT_URL);
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
