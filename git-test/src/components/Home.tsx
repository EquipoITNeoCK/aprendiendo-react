// Home.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PokemonData from '../Pokemon';
import {FetchData} from '../FetchData';

const Home: React.FC = () => {
  const [data, setData] = useState<PokemonData | null>(null); // Estado para los datos del Pokémon
  const [text, setText] = useState(''); // Estado para el contenido del editor de texto
  const [savedText, setSavedText] = useState<string | null>(null); // Estado para el contenido guardado
  const navigate = useNavigate();

  useEffect(() => {
    // Realiza la llamada a la API para obtener los datos del Pokémon
      FetchData(setData)
  }, []);

  // Función para manejar los cambios en el contenido del editor de texto
  const handleTextChange = (value: string) => {
    setText(value);
  };

  // Función para guardar el contenido del editor de texto en el estado savedText
  const handleSave = () => {
    setSavedText(text);
    console.log(text);
  };

  // Configuración de los módulos de ReactQuill, definiendo las opciones de la barra de herramientas
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], // Encabezados y fuentes
      [{size: []}], // Tamaños de fuente
      ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Estilos de texto
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // Listas y sangría
      ['link', 'image'], // Enlaces e imágenes
      [{ 'color': [] }, { 'background': [] }], // Colores de texto y fondo
      ['clean'] // Botón para limpiar el formato
    ],
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Pokémon Details
        </Typography>
        {data && (
          <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4, boxShadow: 6, borderRadius: 3 }}>
            <CardMedia
              component="img"
              height="250"
              image={data.sprites.front_default}
              alt={data.name}
              sx={{ objectFit: 'contain', p: 2, backgroundColor: '#f5f5f5', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
            />
            <CardContent>
              <Typography variant="h5" component="div" align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#3f51b5' }}>
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ fontWeight: 'bold' }}>Abilities:</Typography>
                <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
                  {data.abilities.map((ability, index) => (
                    <li key={index} style={{ display: 'inline', marginRight: 8 }}>
                      <Button variant="outlined" size="small" color="primary">
                        {ability.ability.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="contained" color="secondary" onClick={() => navigate('/login')}>
                  Ir al Login
                </Button>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>Rich Text Editor</Typography>
                {/* Componente ReactQuill para el editor de texto enriquecido */}
                <ReactQuill
                  value={text} // Valor actual del contenido del editor
                  onChange={handleTextChange} // Función para manejar cambios en el contenido
                  modules={modules} // Configuración de la barra de herramientas
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave}>
                  Guardar
                </Button>
              </Box>
              {savedText && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>Texto Guardado</Typography>
                  <Paper elevation={3} sx={{ p: 2, whiteSpace: 'pre-wrap' }}>
                    {/* Renderizado del contenido guardado con formato HTML */}
                    <div dangerouslySetInnerHTML={{ __html: savedText }} />
                  </Paper>
                </Box>
              )}
            </CardContent>
          </Card>
        )}
      </Paper>
    </Container>
  );
};

export default Home;
