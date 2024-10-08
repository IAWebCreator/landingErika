import React from 'react';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { Pets, Assessment, EmojiEvents, Group, Home } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Bienestar Animal",
      description: "Optimizamos las condiciones físicas y emocionales de los perros de trabajo, asegurando su bienestar integral.",
      icon: <Pets fontSize="large" />
    },
    {
      title: "Gestión Canina",
      description: "Asesoramos en la administración y organización de unidades caninas, cumpliendo con las normativas vigentes para garantizar la máxima eficiencia y bienestar.",
      icon: <Assessment fontSize="large" />
    },
    {
      title: "Adiestramiento",
      description: "Perfeccionamos técnicas de adiestramiento en seguridad canina, potenciando las habilidades de los perros en tareas operativas y de vigilancia.",
      icon: <EmojiEvents fontSize="large" />
    },
    {
      title: "Capacitación",
      description: "Fortalecemos el vínculo entre el perro y su manejador, mejorando la comunicación y la efectividad en el trabajo conjunto.",
      icon: <Group fontSize="large" />
    },
    {
      title: "Bienestar Integral para Perros de Hogar",
      description: "Nos enfocamos en garantizar que tu perro viva una vida plena y feliz. Ofrecemos servicios personalizados que abarcan desde su bienestar físico y emocional, hasta el adiestramiento necesario para una convivencia armoniosa.",
      icon: <Home fontSize="large" />
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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundColor: '#f5f5f5',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        marginTop: '-5rem'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 8, color: 'primary.main', fontWeight: 'bold' }}>
          Nuestros Servicios
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
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
                  <Typography variant="body2" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 8, p: 4, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontStyle: 'italic' }}>
            Así, atendemos tanto a las necesidades de empresas de seguridad como a las de hogares, y quienes necesiten nuestro servicio, siempre con el bienestar y la responsabilidad hacia los perros como prioridad.
          </Typography>
        </Box>
      </Container>
    </motion.section>
  );
}

export default Services;