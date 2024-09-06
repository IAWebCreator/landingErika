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
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  En K9 Consultores, somos pioneros en la consultoría y evaluación de unidades caninas de élite. 
                  Nuestra pasión por el bienestar animal y la excelencia operativa nos impulsa a ofrecer soluciones 
                  innovadoras que elevan el estándar en el sector de seguridad canina.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Box
                  component="img"
                  src="/images/k9-team.jpg"
                  alt="Equipo K9 Consultores"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, textAlign: 'center', mb: 4 }}>
                Nuestra Trayectoria
              </Typography>
              <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Desde nuestra fundación en 2003, hemos trabajado con más de 500 organizaciones en 15 países, 
                mejorando la vida de más de 10,000 perros de trabajo y sus manejadores. Nuestro compromiso 
                con la excelencia y el cuidado animal nos ha posicionado como líderes en el sector.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}

export default About;