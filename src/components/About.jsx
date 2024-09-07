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
          <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 6, fontWeight: 300 }}>
            Quiénes Somos
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                  En K9 Consultores, nuestra pasión por el bienestar animal nos impulsa a defender un principio fundamental: los perros de trabajo merecen el mismo nivel de cuidado y respeto que cualquier otro colaborador.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'justify' }}>
                  Nos dedicamos a evaluar y optimizar las condiciones de vida y trabajo de los caninos en el sector de seguridad, garantizando que cada animal disfrute de un entorno saludable, un trato digno y las condiciones óptimas para desempeñar sus funciones de manera segura y eficaz.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  component="img"
                  src="/images/k9-team.jpeg"
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