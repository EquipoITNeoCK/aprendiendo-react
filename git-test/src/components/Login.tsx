import { Box,InputAdornment,IconButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavButton } from '../routes/NavButton';
import { CardLogin,InputMail,BoxByNeock ,TypographyBienvenido,TypographyNeoTools,InputPassword, ForgotPassword, LoginButton} from './ComponentesLogin.styles.tsx';



export const Login: React.FC = () => {
  return (
    <>
      <NavButton text="Home" href="/home" />
      <CardLogin>
        <Box sx={{ padding: "7px" }}>
          <Box
             component="img"
             src="../../public/logologin.png"
             sx={{
              width: "20%",
              margin: 'auto',
              display: 'block',
             }
            }
          />
          <Box sx={{ marginTop: '20px' }}>
            <TypographyBienvenido
                variant="h5"
            >
            Bienvenid@
            </TypographyBienvenido>
            <TypographyNeoTools>
              neoTOOLS{' '}
              <BoxByNeock component="span">
                by neoCK
              </BoxByNeock>
            </TypographyNeoTools >
          </Box>
        </Box>
        <Box sx={{marginTop:"20px"}}>
          <InputMail
            variant="outlined"
            label="Email"
            placeholder="email@ejemplo.es"
            InputLabelProps={{ shrink: true }}
          />
          <InputPassword
            type="password"
            variant="outlined"
            size="medium"
            fullWidth
            label="Contraseña"
            placeholder="************"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton >
                    <VisibilityIcon sx={{ width: "1.5vw", height: "1.5vw" }}/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <ForgotPassword
          variant="h4"
        >
          ¿Has olvidado tu contraseña?
        </ForgotPassword>
        <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
          <LoginButton 
            size="large"
            color="primary"
            variant="contained"
          > 
            INICIAR SESIÓN
          </LoginButton>
        </Box>
      </CardLogin>
    </>
  );
}
