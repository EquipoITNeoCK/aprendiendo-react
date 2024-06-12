import React, { useState } from 'react';
import {Box, Typography, IconButton, InputAdornment, Button, TextField} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import theme from '../../Common.theme.tsx';
import {
    StyledLoginBox,
    StyledLoginCard,
    StyledLoginContainer,
    StyledLoginTypography1,
    StyledLoginTypography2
} from "./Login.style.tsx";


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_ENDPOINT_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);

        localStorage.setItem('message', data.message);

        if (data.access_token != null) {
          navigate('/pokemonTable');
        }
      } else {
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLoginContainer component="main" maxWidth="xs" >
        <StyledLoginCard elevation={6} >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              component="img"
              src="../../public/img.png"
              alt="User Photo"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
            <StyledLoginTypography1
              variant="h5"
            >
              Bienvenid@ a
            </StyledLoginTypography1>
            <StyledLoginTypography2
              variant="h5"
            >
              <Box component="span" color={theme.palette.yellow}>
                neoTOOLS
              </Box>{' '}
              <StyledLoginBox component="span">
                by neoCK
              </StyledLoginBox>
            </StyledLoginTypography2>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                placeholder="email@ejemplo.es"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                placeholder="********"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility">
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                component="img"
                src="../../public/boff.png"
                alt="User Photo"
                sx={{ width: 500, height: 120, mb: 2 }}
              />
              <Typography variant="body2" align="center" sx={{ mt: 2, mb: 2 }}>
                ¿Has olvidado tu contraseña?
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                INICIAR SESIÓN
              </Button>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
                  Ir a Home
                </Button>
              </Box>
            </Box>
          </Box>
        </StyledLoginCard>
      </StyledLoginContainer>
    </ThemeProvider>
  );
};

export default Login;
