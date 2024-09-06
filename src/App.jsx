import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1C2541', // Azul oscuro profundo, representa confianza y profesionalismo
      light: '#3A506B',
      dark: '#0B132B',
    },
    secondary: {
      main: '#5BC0BE', // Turquesa, representa innovación y frescura
      light: '#6FFFE9',
      dark: '#45A29E',
    },
    background: {
      default: '#F5F5F5', // Gris muy claro para el fondo
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0B132B', // Azul muy oscuro para el texto principal
      secondary: '#3A506B', // Azul medio para texto secundario
    },
    error: {
      main: '#D64045', // Rojo para errores y alertas
    },
    warning: {
      main: '#FFD700', // Amarillo dorado para advertencias
    },
    success: {
      main: '#4CAF50', // Verde para éxito
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.01562em',
      color: '#1C2541',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '3rem',
      letterSpacing: '-0.00833em',
      color: '#1C2541',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '0em',
      color: '#1C2541',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.00735em',
      color: '#1C2541',
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0em',
      color: '#1C2541',
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      letterSpacing: '0.0075em',
      color: '#1C2541',
    },
    subtitle1: {
      fontSize: '1rem',
      letterSpacing: '0.00938em',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      letterSpacing: '0.00714em',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '0.01071em',
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          padding: '10px 24px',
          boxShadow: '0 4px 6px rgba(28, 37, 65, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(28, 37, 65, 0.15)',
          },
        },
        containedPrimary: {
          backgroundColor: '#1C2541',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#3A506B',
          },
        },
        containedSecondary: {
          backgroundColor: '#5BC0BE',
          color: '#0B132B',
          '&:hover': {
            backgroundColor: '#6FFFE9',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(28, 37, 65, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{
        background: 'linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header />
        <WhyChooseUs />
        <About />
        <Services />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;