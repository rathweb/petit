import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAnimalImage } from '../assets/js/backgroundImage.js';
import axios from "axios"
// function getRandomAnimalImageUrl() {
//   return `https://source.unsplash.com/random?animals&${Math.random()}`;
// }

function SignUp() {
  const [backgroundUrl, setBackgroundUrl] = React.useState(getAnimalImage());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundUrl(getAnimalImage());
    }, 5000); // la imagen se cambia cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData)

    try {
      // Send a POST request to the signup endpoint with user data
      const response = await axios.post('/api/signup', {
        name: formData.get('Name'), // Retrieve first name from form data
        lastName: formData.get('lastName'), // Retrieve last name from form data
        email: formData.get('email'), // Retrieve email from form data
        phoneNumber: formData.get('phoneNumber'), // Retrieve phone number from form data
        password: formData.get('password'), // Retrieve password from form data
      });

      // Handle successful signup
      console.log(response.data);
      // Redirect to login page or show a success message
    } catch (error) {
      // Handle signup error
      console.error('Error signing up:', error.response.data);
      // Display error message to the user
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // fondo cubre toda la página
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // fondo semi-transparente del formulario
              p: 4, // relleno interno al contenedor del formulario
              borderRadius: 8,
              backdropFilter: 'blur(5px)', // desenfoque al fondo
            }}
          >
            <Avatar sx={{ m: 'auto', bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
            CREA TU CUENTA AHORA
            </Typography>
            <form onSubmit={handleSubmit}>
            <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellidos"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    label="Número de teléfono"
                    type="numberPhone"
                    id="phoneNumber"
                    autoComplete="numberPhone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Me gustaría recibir novedades."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                CREAR CUENTA
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                    <RouterLink to="/login" style={{color: '#1976d2', fontSize: '0.875rem'}}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </RouterLink>
                </Grid>
              </Grid>
            </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignUp;