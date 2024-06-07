import { Card,Typography,Box,TextField,Button,styled} from "@mui/material"
import colors from "../styles/colors.theme"

export const CardLogin = styled(Card)(({ theme }) => ({
  width: "35%",
  margin: "auto",
  padding: theme.spacing(2),
  backgroundColor: colors.background.default,
}));


export const TypographyBienvenido = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontSize: '2.8vw',
  fontWeight: 400,
  lineHeight: theme.spacing(10),
  letterSpacing: '0.14000000059604645vw',
  textAlign: 'center',
  color: colors.text.primary,
}));

export const TypographyNeoTools = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontSize: '2.8vw',
  fontWeight: 700,
  lineHeight: theme.spacing(2),
  letterSpacing: '0.14000000059604645px',
  textAlign: 'center',
  color: colors.yellow,
}));


export const BoxByNeock = styled(Box)(({ theme }) => ({
  fontFamily: 'Lato',
  fontSize: theme.spacing(4),
  fontWeight: 700,
  lineHeight: '39%',
  letterSpacing: '0.14000000059604645%',
  textAlign: 'center',
  color: colors.grey[500],
}));

export const InputMail = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(5),
  width: "34.3vw",
  height: "8vh", 
  "& .MuiInputBase-input": {
    fontSize: "1.5vw"
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Arial",
    fontSize: "1.2vw"
  }
}));

export const InputPassword = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: "34.3vw",
  height: "8vh",
  "& .MuiInputBase-input": {
    fontSize: "1.5vw"
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Arial",
    fontSize: "1.2vw"
  }
}));

export const ForgotPassword = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lato',
  fontSize: '1.3vw',
  fontWeight: 400,
  lineHeight: '2vw',
  letterSpacing: '0.14000000059604645px',
  textAlign: 'center',
  textDecoration: "underline",
  marginTop: theme.spacing(3),
  color: colors.primary.main,
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  width: "15vw",
  height: "8vh",
  fontSize: "1vw",
  marginTop: theme.spacing(3)
}));