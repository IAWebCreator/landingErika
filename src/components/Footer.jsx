import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Email, LocationOn, WhatsApp } from '@mui/icons-material';

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
              <Link href="mailto:info@k9-consultores.com" color="inherit" underline="none">
                <Typography variant="body2">info@k9-consultores.com</Typography>
              </Link>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: '0.9rem' }} />
              <Typography variant="body2">Bogotá, Colombia</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Contáctanos por WhatsApp
            </Typography>
            <IconButton 
              color="inherit" 
              aria-label="WhatsApp" 
              size="small" 
              component="a" 
              href="https://wa.me/573152740577" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <WhatsApp fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ mt: 1 }}>
              +57 315 2740577
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Sobre Caninos & Consultores
            </Typography>
            <Typography variant="body2">
              Elevemos los estándares de la seguridad canina
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center" fontSize="0.8rem">
            © {new Date().getFullYear()} Caninos & Consultores. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;