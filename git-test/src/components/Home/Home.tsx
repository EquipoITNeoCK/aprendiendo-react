import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {PokemonData} from '../../interfaces/Pokemon.tsx';
import {FetchData} from '../../services/fetchData.tsx';

const Home: React.FC = () => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
      FetchData(setData)
  }, []);

  const handleTextChange = (value: string) => {
    setText(value);
  };

  const handleSave = () => {
    setSavedText(text);
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
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
              sx={{ p: 2, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}
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
                <ReactQuill
                  value={text}
                  onChange={handleTextChange}
                  modules={modules}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave}>
                  Guardar
                </Button>
              </Box>
              {savedText && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>Texto Guardado</Typography>
                  <Paper elevation={3} sx={{ p: 2, whiteSpace: 'pre-wrap' }}>
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
