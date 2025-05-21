import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "../styles/SHA512.css";

const SHA512 = () => {
  const [inputText, setInputText] = useState("");
  const [sha512Hash, setSha512Hash] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleHashSHA512 = () => {
    const hash = CryptoJS.SHA512(inputText);
    setSha512Hash(hash.toString(CryptoJS.enc.Hex));
  };
  return (
    <div className="container">
      <h1>SHA-512</h1>
      <p className="description">
        It is considered more secure and resistant to brute-force attacks than
        SHA-256 due to its larger output size. SHA-512 is often used in
        security-sensitive applications where a higher level of security is
        required, such as digital signatures, password hashing, and data
        integrity verification.
      </p>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">SHA-512</p>
            <p>Input Text Here</p>
          </div>

          <div className="flip-card-back">
            <div className="text-area-container">
              <textarea
                className="text-area"
                placeholder="Input text here..."
                value={inputText}
                onChange={handleInputChange}
              ></textarea>
              <textarea
                className="text-area"
                placeholder="SHA-512 Hash..."
                value={sha512Hash}
                readOnly
              ></textarea>
            </div>
            <button className="ui-btn" onClick={handleHashSHA512}>
              <span>Generate Hash</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHA512;
