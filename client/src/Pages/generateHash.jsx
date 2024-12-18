import React, { useState } from "react";
import axios from "axios";

const GenerateHash = () => {
  const [password, setPassword] = useState(""); 
  const [hash, setHash] = useState(""); 
  const [error, setError] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleGenerate = async () => {
    try {
      setError("")
      setMessage("")

      const response = await axios.post("http://localhost:8000/password/generate", { password });

      if (response.data.hashedPassword) {
        setHash(response.data.hashedPassword)
        setPassword(password)
        setMessage(response.data.message)
      } else {
        setError("Error generating hash. Try again.");
      }
    } catch (err) {
      setError("Error generating hash. Please try again.");
      console.error("Error in frontend:", err);
    }
  };

  return (
    <div> 
      <h2 className="text-success ">Generate Password Hash</h2>
      <input 
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
      <button onClick={handleGenerate} className="btn btn-success ms-3 ">Generate Hash</button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {message && <div style={{ color: "green" }}>{message}</div>} 

      {hash && (
        <div>
          <h3>Generated Hash</h3>
          <strong>Password:</strong> {password} <br />
          <strong>Hash:</strong> {hash}
        </div>
      )}
    </div>
  );
};

export default GenerateHash;