import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { Security, Verified, EmojiEvents, Gavel } from '@mui/icons-material';

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Security fontSize="large" />,
      title: "Perros de Trabajo para Empresas de Seguridad Privada",
      description: "Garantizamos que cada perro reciba el cuidado y entrenamiento necesarios para rendir al máximo sin comprometer su bienestar. Operan de forma eficiente, responsable y ética."
    },
    {
      icon: <Gavel fontSize="large" />,
      title: "Cuidado y Bienestar para Perros de Hogar",
      description: "Aseguramos la felicidad, salud y buen comportamiento de cada mascota, tratándola con cariño, respeto y responsabilidad."
    },
    {
      icon: <Verified fontSize="large" />,
      title: "Cumplimiento Normativo y Bienestar Garantizado",
      description: "Ofrecemos asesoría integral para cumplir con normativas y promover el bienestar animal, optimizando procesos y garantizando un entorno seguro."
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: "Reputación Sólida y Soluciones Personalizadas",
      description: "Implementamos estrategias para fortalecer la reputación de tu empresa y desarrollamos soluciones a medida que maximizan la operatividad y el bienestar de tus equipos caninos."
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
          ¿Por Qué Elegirnos?
        </Typography>
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  bgcolor: 'background.paper', 
                  borderColor: 'primary.light', 
                  transition: 'all 0.3s ease-in-out', 
                  '&:hover': { 
                    transform: 'translateY(-10px)', 
                    boxShadow: 6, 
                    bgcolor: 'primary.light', 
                    color: 'white' 
                  },
                  minHeight: '300px' // Ensuring all boxes have the same minimum height
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                    {reason.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ fontWeight: 600, mb: 2 }}>
                    {reason.title}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    {reason.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.section>
  );
}

export default WhyChooseUs;