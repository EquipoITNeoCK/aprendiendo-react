import React from 'react';
import { Container, ContainerProps, Card, CardProps, Box, BoxProps, TextField, TextFieldProps, Button, ButtonProps, Typography, TypographyProps, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import theme from "../Common.theme.tsx";

const MainContainer: React.FC<ContainerProps> = (props) => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      {...props}
    >
      {props.children}
    </Container>
  );
};

const CenteredBox: React.FC<BoxProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const LoginTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
};

const LoginButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      sx={{ mt: 3, mb: 2 }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

interface StyledTypographyProps extends TypographyProps {
  color?: string;
  fontWeight?: number;
}

const StyledTypography: React.FC<StyledTypographyProps> = (props) => {
  const { color, fontWeight, ...rest } = props;

  return (
    <Typography
      sx={{
        mb: 2,
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: '32px',
        lineHeight: '48px',
        letterSpacing: '0.14px',
        color: color || 'inherit',
        fontWeight: fontWeight || 'inherit',
      }}
      {...rest}
    >
      {props.children}
    </Typography>
  );
};

const LoginCard: React.FC<CardProps> = (props) => {
  return (
    <Card
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 3,
        width: '100%',
        maxWidth: '552px',
        minHeight: '653px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

const ImageBox: React.FC<BoxProps & { src: string; alt: string }> = ({ src, alt, ...props }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: 100, height: 100, mb: 2 }}
      {...props}
    />
  );
};

const PasswordTextField: React.FC<TextFieldProps & { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange, ...props }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Contraseña"
      id="password"
      autoComplete="current-password"
      value={value}
      onChange={onChange}
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
      {...props}
    />
  );
};

const EmailTextField: React.FC<TextFieldProps & { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange, ...props }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email"
      name="email"
      autoComplete="email"
      autoFocus
      value={value}
      onChange={onChange}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      placeholder="email@ejemplo.es"
      {...props}
    />
  );
};

const StyledTypographyBienvenido: React.FC = () => {
  return (
    <StyledTypography
      component="h4"
      variant="h5"
      color={theme.palette.primary.main}
      fontWeight={400}
    >
      Bienvenid@ a
    </StyledTypography>
  );
};

export { MainContainer, CenteredBox, LoginTextField, LoginButton, StyledTypography, LoginCard, ImageBox, PasswordTextField, EmailTextField, StyledTypographyBienvenido };
