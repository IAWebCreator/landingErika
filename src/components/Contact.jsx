import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Container, Paper, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    if (name === 'email') {
      setEmailError(!isValidEmail(value));
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setEmailError(true);
      return;
    }

    try {
      const response = await fetch('https://hook.us1.make.com/y8a4sinpqterncsph25fampfv456noyd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({ open: true, message: 'Mensaje enviado con éxito!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSnackbar({ open: true, message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo.' });
    }
  };

  return (
    <Container component="section" maxWidth="sm" sx={{ my: 8 }} id="contact">
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField 
              fullWidth 
              label="Nombre" 
              name="name"
              variant="outlined" 
              size="small"
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <TextField 
              fullWidth 
              label="Correo Electrónico" 
              name="email"
              variant="outlined" 
              type="email" 
              size="small"
              required 
              value={formData.email}
              onChange={handleChange}
              error={emailError}
              helperText={emailError ? "Por favor, ingrese un correo electrónico válido" : ""}
            />
            <TextField 
              fullWidth 
              label="Mensaje" 
              name="message"
              variant="outlined" 
              multiline 
              rows={3}
              size="small"
              required 
              value={formData.message}
              onChange={handleChange}
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
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </Container>
  );
}

export default Contact;