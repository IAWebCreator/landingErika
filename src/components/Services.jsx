import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { Pets, Assessment, EmojiEvents, Group } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Bienestar Animal",
      description: "Optimizamos condiciones para perros de trabajo.",
      icon: <Pets fontSize="large" />
    },
    {
      title: "Gestión Canina",
      description: "Asesoramos la administración de unidades caninas según las normativas",
      icon: <Assessment fontSize="large" />
    },
    {
      title: "Adiestramiento",
      description: "Mejoramos técnicas de seguridad canina.",
      icon: <EmojiEvents fontSize="large" />
    },
    {
      title: "Capacitación",
      description: "Fortalecemos vínculo perro-manejador.",
      icon: <Group fontSize="large" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Container component="section" id="services" maxWidth="lg" sx={{ textAlign: 'center', mb: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Nuestros Servicios
      </Typography>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div variants={itemVariants}>
                <Paper elevation={0} sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0', 
                  transition: 'all 0.3s ease-in-out', 
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: 3 } 
                }}>
                  {service.icon}
                  <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default Services;