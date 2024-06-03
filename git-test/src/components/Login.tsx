import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import theme from '../Common.theme';
import { MainContainer, CenteredBox, EmailTextField, PasswordTextField, LoginButton, StyledTypography, StyledTypographyBienvenido, LoginCard, ImageBox } from './LoginComponents';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dev.neock.es/api/sac/v2/unlogged/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: email, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('access_token', data.access_token);

        localStorage.setItem('roles', JSON.stringify(data.roles));
        localStorage.setItem('message', data.message);

      } else {
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <LoginCard>
          <CenteredBox>
            <ImageBox src="../../public/img.png" alt="User Photo" />
            <StyledTypographyBienvenido />
            <StyledTypography
              component="h4"
              variant="h5"
              fontWeight={700}
            >
              <Box component="span" color={"yellow"}>
                neoTOOLS
              </Box>{' '}
              <Box component="span">
                by neoCK
              </Box>
            </StyledTypography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
              <EmailTextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <PasswordTextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box component="img" src="../../public/boff.png" alt="User Photo" sx={{ width: 500, height: 120, mb: 2 }} />
              <Typography variant="body2" align="center" sx={{ mt: 2, mb: 2 }}>
                ¿Has olvidado tu contraseña?
              </Typography>
              <LoginButton type="submit">
                INICIAR SESIÓN
              </LoginButton>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
                  Ir a Home
                </Button>
              </Box>
            </Box>
          </CenteredBox>
        </LoginCard>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Login;
