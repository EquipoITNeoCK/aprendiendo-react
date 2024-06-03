import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import theme from '../Common.theme'; // Asegúrate de que la ruta sea correcta
import {
  MainContainer,
  CenteredBox,
  EmailTextField,
  PasswordTextField,
  LoginButton,
  StyledTypography,
  LoginCard,
  ImageBox,
  StyledTypographyBienvenido
} from './LoginComponents';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
              <Box component="span" sx={{ color: '#D48C0C' }}>
                neoTOOLS
              </Box>{' '}
              <Box component="span">
                by neoCK
              </Box>
            </StyledTypography>
            <Box component="form" sx={{ mt: 1 }}>
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
              <LoginButton>
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
