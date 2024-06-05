import { styled } from '@mui/system';
import { Card, Box, Typography } from '@mui/material';

export const StyledLoginCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1.5),
  width: '100%',
  maxWidth: theme.spacing(69),
  minHeight: theme.spacing(81.625),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledLoginContainer = styled(Box)(({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledLoginTypography1 = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontFamily: 'Lato',
  fontSize: theme.spacing(4),
  fontWeight: 400,
  lineHeight: theme.spacing(6),
  letterSpacing: '0.14px',
}));

export const StyledLoginTypography2 = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontFamily: 'Lato',
  fontSize: theme.spacing(4),
  fontWeight: 700,
  lineHeight: theme.spacing(6),
  letterSpacing: '0.14px',
}));

export const StyledLoginBox = styled(Box)(({ theme }) => ({
  fontFamily: 'Lato',
  fontSize: theme.spacing(4),
  fontWeight: 700,
  lineHeight: theme.spacing(6),
  letterSpacing: '0.14px',
  textAlign: 'center',
}));
