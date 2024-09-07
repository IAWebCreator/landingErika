import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Button, Typography, Box, Container } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
    <Parallax
      blur={0}
      bgImage="https://www.garda.com/sites/default/files/K9-Security-cropped.jpg"
      bgImageAlt="Perro de seguridad profesional"
      strength={200}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly lighter overlay
          color: '#ffffff', // Bright white text
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', mb: 4, color: '#f0f0f0' }}>
              K9 Consultores
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', mb: 4, color: '#f0f0f0' }}>
              Bienestar animal en perros de trabajo
            </Typography>
            <Typography variant="h4" component="h3" gutterBottom sx={{ maxWidth: '800px', mb: 6, textShadow: '2px 2px 4px rgba(0,0,0,0.8)', color: '#f0f0f0' }}>
              Especialistas en bienestar animal y evaluación profesional de unidades caninas de élite
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SecurityIcon />}
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.dark',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'secondary.light',
                    },
                  }}
                >
                  Solicitar Consulta
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
}

export default Header;