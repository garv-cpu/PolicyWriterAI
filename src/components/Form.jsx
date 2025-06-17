import React from "react";
import { motion } from "framer-motion";

const Form = ({
  businessName,
  setBusinessName,
  businessType,
  setBusinessType,
  email,
  setEmail,
  country,
  setCountry,
  policyType,
  setPolicyType,
  generatePolicy,
  loading,
}) => {
  return (
    <motion.form
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div>
        <label className="block text-sm mb-1">Business Name</label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., PixelCraft Studio"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Business Type</label>
        <input
          type="text"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., SaaS, eCommerce"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Contact Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@domain.com"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="India"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm mb-1">Policy Type</label>
        <select
          value={policyType}
          onChange={(e) => setPolicyType(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Privacy Policy</option>
          <option>Terms of Service</option>
          <option>Refund Policy</option>
          <option>Cookie Policy</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          onClick={generatePolicy}
          disabled={loading}
          className={`mt-4 px-6 py-3 rounded-lg transition font-medium ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Generating..." : "Generate Policy"}
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
