import React, { useState } from "react";
import axios from "axios";

const VerifyHash = () => {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");
  const [isMatch, setIsMatch] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      setError("");
      const response = await axios.post("http://localhost:8000/password/verify", {
        password,
        hash,
      });
      setIsMatch(response.data.isMatch);
    } catch (err) {
      setError("Error verifying hash. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-success ">Verify Password Hash</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Enter the hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleVerify} style={{ padding: "5px 10px"}}className="btn btn-success">
        Verify
      </button>
      {isMatch !== null && (
        <div style={{ marginTop: "10px", color: isMatch ? "green" : "red" }}>
          <strong>{isMatch ? "Password matches the hash!" : "Password does not match the hash!"}</strong>
        </div>
      )}
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </div>
  );
};

export default VerifyHash;