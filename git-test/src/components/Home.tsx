import React, { useState } from 'react';
import './Home.css';

interface ApiData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Home: React.FC = () => {
  const [data, setData] = useState<ApiData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (data) {
      setData(null);
      return;
    }
  
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(import.meta.env.VITE_ENDPOINT_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: any = await response.json(); 
      const filteredData: ApiData = {
        name: result.name,
        sprites: result.sprites
      };
      setData([filteredData]); 
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="container">
      <h1>Bienvenido a la página de Inicio</h1>
      <button onClick={fetchData} disabled={loading}>
        {data ? 'Ocultar datos de la API' : 'Traer datos de la API'}
      </button>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {data && data.length > 0 && (
        <img src={data[0].sprites.front_default} alt={data[0].name} />
      )}
    </div>
  );
};

export default Home;
