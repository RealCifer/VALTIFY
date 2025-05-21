import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "../styles/SHA256.css";

const SHA256 = () => {
  const [inputText, setInputText] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleHashSHA256 = () => {
    const hash = CryptoJS.SHA256(inputText);
    setSha256Hash(hash.toString(CryptoJS.enc.Hex));
  };

  return (
    <div className="container">
      <h1>SHA-256</h1>
      <p className="description">
        SHA-256 is known for its strength and is commonly used in various
        security applications, including password hashing, digital certificates,
        and blockchain technology, to ensure the integrity and security of data.
      </p>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">SHA-256</p>
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
                placeholder="SHA-256 Hash..."
                value={sha256Hash}
                readOnly
              ></textarea>
            </div>
            <button className="ui-btn" onClick={handleHashSHA256}>
              <span>Generate Hash</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHA256;
