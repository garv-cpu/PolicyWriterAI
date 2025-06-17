import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCopy } from 'lucide-react';

const GeneratedOutput = ({ policy, policyType }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(policy);
    alert('Policy copied to clipboard!');
  };

  if (!policy) return null;

  return (
    <motion.div
      className="mt-10 bg-gray-900 bg-opacity-70 border border-gray-700 p-6 rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">{policyType}</h2>
        <button
          onClick={copyToClipboard}
          className="text-sm text-blue-400 hover:text-blue-500 flex items-center gap-1"
        >
          <ClipboardCopy size={16} />
          Copy
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-gray-300 text-sm font-mono">
        {policy}
      </pre>
    </motion.div>
  );
};

export default GeneratedOutput;