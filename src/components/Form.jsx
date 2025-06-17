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
  website,
  setWebsite,
  dataCollected,
  setDataCollected,
  servicesUsed,
  setServicesUsed,
  audience,
  setAudience,
  generatePolicy,
  loading,
}) => {
  const inputClass =
    "w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500";

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
          className={inputClass}
          placeholder="e.g., PixelCraft Studio"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Business Type</label>
        <input
          type="text"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={inputClass}
          placeholder="e.g., SaaS, eCommerce"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Business Website</label>
        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className={inputClass}
          placeholder="https://yourcompany.com"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Contact Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="example@domain.com"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Country</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className={inputClass}
          placeholder="India"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Target Audience</label>
        <input
          type="text"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className={inputClass}
          placeholder="e.g., General users, Children, B2B clients"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm mb-1">Data Collected</label>
        <input
          type="text"
          value={dataCollected}
          onChange={(e) => setDataCollected(e.target.value)}
          className={inputClass}
          placeholder="e.g., name, email, location, usage data"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm mb-1">Third-party Services Used</label>
        <input
          type="text"
          value={servicesUsed}
          onChange={(e) => setServicesUsed(e.target.value)}
          className={inputClass}
          placeholder="e.g., Google Analytics, Stripe, Firebase"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm mb-1">Policy Type</label>
        <select
          value={policyType}
          onChange={(e) => setPolicyType(e.target.value)}
          className={inputClass}
        >
          <option>Privacy Policy</option>
          <option>Terms of Service</option>
          <option>Refund Policy</option>
          <option>Cookie Policy</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            generatePolicy();
          }}
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
