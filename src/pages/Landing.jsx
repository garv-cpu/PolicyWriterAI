import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
const Landing = () => {
  const navigate = useNavigate()
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-900 bg-opacity-60 shadow-2xl backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
        <h2 className="text-5xl font-bold mb-4 text-white">Welcome to PolicyWriter AI</h2>
        <p className="text-xl text-gray-300 mb-6">
          Instantly generate Privacy Policies, Terms & Conditions, Refund and Cookie Policies customized for your business.
        </p>
        <button
          onClick={() => navigate('/generate')}
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Your First Policy
        </button>
      </div>
    </motion.section>
  );
};

export default Landing;
