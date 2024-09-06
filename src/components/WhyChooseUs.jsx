import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { Security, Verified, EmojiEvents, Gavel } from '@mui/icons-material';

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Security fontSize="large" />,
      title: "Experiencia Inigualable",
      description: "20+ años de soluciones de élite para unidades caninas."
    },
    {
      icon: <Verified fontSize="large" />,
      title: "Certificaciones Globales",
      description: "Acreditaciones internacionales en bienestar animal y seguridad."
    },
    {
      icon: <EmojiEvents fontSize="large" />,
      title: "Resultados Comprobados",
      description: "Mejora en 10,000+ unidades caninas en Latinoamérica."
    },
    {
      icon: <Gavel fontSize="large" />,
      title: "Cumplimiento Legal",
      description: "Garantía de operaciones conformes a normativas vigentes."
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
        backgroundColor: 'background.paper',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        marginTop: '-5rem'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 8, color: 'primary.main' }}>
          ¿Por Qué Elegirnos?
        </Typography>
        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={itemVariants}>
                <Paper elevation={0} sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'background.paper', borderColor: 'primary.light', transition: 'all 0.3s ease-in-out', '&:hover': { transform: 'translateY(-10px)', boxShadow: 3 } }}>
                  {reason.icon}
                  <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ fontWeight: 500, mb: 2 }}>
                    {reason.title}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
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