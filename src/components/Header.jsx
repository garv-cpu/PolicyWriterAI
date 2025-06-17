import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex justify-center items-center gap-2">
        <Sparkles className="text-blue-400 animate-pulse" />
        Policy Writer
      </h1>
      <p className="mt-3 text-gray-300 text-lg max-w-2xl mx-auto">
        Instantly generate custom policies for your business using AI.
      </p>
    </motion.div>
  );
};

export default Header;