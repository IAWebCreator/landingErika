import React from 'react';
import { motion } from 'framer-motion';

function Separator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        height: '80px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 50%, transparent 100%)',
        margin: '1rem 0',
      }}
    />
  );
}

export default Separator;