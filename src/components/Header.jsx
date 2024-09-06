import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Button, Typography, Box, Container } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';

function Header() {
  return (
    <Parallax
      blur={0}
      bgImage="/images/security-dog.jpg"
      bgImageAlt="Perro de seguridad profesional"
      strength={200}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', mb: 4 }}>
              K9 Consultores en Bienestar Animal
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom sx={{ maxWidth: '800px', mb: 6, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              Especialistas en Bienestar y Evaluación Profesional de Unidades Caninas de Élite
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<SecurityIcon />}
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
              >
                Solicitar Consulta
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
}

export default Header;