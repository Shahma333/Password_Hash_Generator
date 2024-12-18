import React from "react";
import GenerateHash from "./Pages/generateHash"
import VerifyHash from "./Pages/VerifyHash"
import './style.css'

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-success">Password Hash Generator and Verifier</h1>
      <div style={{ margin: "20px 0" }}>
        <GenerateHash />
      </div>
      <div style={{ margin: "20px 0" }}>
        <VerifyHash />
      </div>
    </div>
  );
};

export default App;