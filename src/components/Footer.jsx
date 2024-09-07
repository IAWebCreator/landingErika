import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: '0.9rem' }} />
              <Typography variant="body2">info@k9-consultores.com</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: '0.9rem' }} />
              <Typography variant="body2">Bogotá, Colombia</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Síguenos
            </Typography>
            <IconButton color="inherit" aria-label="Facebook" size="small">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter" size="small">
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn" size="small">
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram" size="small">
              <Instagram fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Sobre K9 Consultores
            </Typography>
            <Typography variant="body2">
              Elevemos los estándares de la seguridad canina
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center" fontSize="0.8rem">
            © {new Date().getFullYear()} K9 Consultores. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;