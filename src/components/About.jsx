import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Separator from './Separator';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      <Separator />
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h4" component="h2" gutterBottom color="primary.main">
                  Sobre Nosotros
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                  En K9 Consultores, nos especializamos en la consultoría y evaluación de perros de trabajo para el sector de seguridad. Nuestro equipo de expertos combina años de experiencia en el manejo y análisis de unidades caninas con un enfoque innovador y orientado a resultados.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                  Nos dedicamos a proporcionar soluciones integrales que no solo aseguran el cumplimiento de las normativas vigentes, sino que también optimizan el rendimiento y el bienestar de los equipos caninos de nuestros clientes.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  component="img"
                  src="https://media.defense.gov/2024/Apr/16/2003440069/825/780/0/240326-Z-WD033-1002.JPG"
                  alt="Equipo K9 Consultores"
                  sx={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: 2,
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                Como expertos en consultoría y evaluación de perros de trabajo para el sector de seguridad, combinamos nuestra amplia experiencia en manejo y análisis de unidades caninas con un enfoque innovador. Ofrecemos soluciones personalizadas que permiten a nuestros clientes no solo cumplir con las normativas y evitar sanciones, sino también maximizar el bienestar y la eficiencia de sus equipos caninos, elevando así el estándar de la industria.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}

export default About;