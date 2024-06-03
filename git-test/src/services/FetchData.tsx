import PokemonData from '../interfaces/Pokemon.tsx';

export const FetchData = (setData: (data: PokemonData | null) => void) => {
  fetch(import.meta.env.VITE_ENDPOINT_URL)
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
};
