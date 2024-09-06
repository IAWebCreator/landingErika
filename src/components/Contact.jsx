import React from 'react';
import { Typography, Box, TextField, Button, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Container component="section" maxWidth="sm" sx={{ my: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.paper' }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 3, fontWeight: 300 }}>
            Contáctanos
          </Typography>
          <Typography variant="body2" paragraph align="center" sx={{ mb: 3 }}>
            Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos a la brevedad.
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              fullWidth 
              label="Nombre" 
              variant="outlined" 
              size="small"
              required 
            />
            <TextField 
              fullWidth 
              label="Correo Electrónico" 
              variant="outlined" 
              type="email" 
              size="small"
              required 
            />
            <TextField 
              fullWidth 
              label="Mensaje" 
              variant="outlined" 
              multiline 
              rows={3}
              size="small"
              required 
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              sx={{ mt: 1, alignSelf: 'center' }}
            >
              Enviar
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default Contact;