import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GeneratedOutput from "./components/GeneratedOutput";
import { motion } from "framer-motion";
import axios from "axios";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [policyType, setPolicyType] = useState("Privacy Policy");
  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePolicy = async () => {
    const prompt = `Write a ${policyType} for a ${businessType} called "${businessName}", based in ${country}. Contact email: ${email}`;
    setLoading(true);
    setPolicy(""); // Optional: clear old result
    try {
      const response = await axios.post("http://localhost:4000/api/generate", {
        prompt,
      });
      setPolicy(response.data);
    } catch (error) {
      console.error("Error generating policy:", error);
      setPolicy("Failed to generate policy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-gray-900 bg-opacity-60 shadow-2xl backdrop-blur-md rounded-2xl p-8 max-w-6xl mx-auto mt-10 border border-gray-700"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <Form
          businessName={businessName}
          setBusinessName={setBusinessName}
          businessType={businessType}
          setBusinessType={setBusinessType}
          email={email}
          setEmail={setEmail}
          country={country}
          setCountry={setCountry}
          policyType={policyType}
          setPolicyType={setPolicyType}
          generatePolicy={generatePolicy}
          loading={loading} // ✅ pass it here
        />

        <GeneratedOutput policy={policy} policyType={policyType} />
      </motion.div>
    </motion.div>
  );
}

export default App;
