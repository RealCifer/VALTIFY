import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "../styles/AES.css";

const AES = () => {
  const [inputText, setInputText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [inputFormat, setInputFormat] = useState("Base64");
  const [outputFormat, setOutputFormat] = useState("Base64");

  const handleEncrypt = () => {
    try {
      if (!inputText || !secretKey) {
        alert("Please provide both text and secret key.");
        return;
      }
      const key = CryptoJS.SHA256(secretKey);
      const iv = CryptoJS.lib.WordArray.random(16);
      const encrypted = CryptoJS.AES.encrypt(inputText, key, { iv });
      const encryptedData = iv.concat(encrypted.ciphertext);
      const formattedEncryptedText =
        outputFormat === "Hexadecimal"
          ? encryptedData.toString(CryptoJS.enc.Hex)
          : encryptedData.toString(CryptoJS.enc.Base64);

      setEncryptedText(formattedEncryptedText);
    } catch (error) {
      console.error("Error encrypting:", error);
    }
  };
  const handleDecrypt = () => {
    try {
      if (!encryptedText || !secretKey) {
        alert("Please provide both encrypted text and secret key.");
        return;
      }
      const key = CryptoJS.SHA256(secretKey);
      const encryptedData =
        inputFormat === "Hexadecimal"
          ? CryptoJS.enc.Hex.parse(encryptedText)
          : CryptoJS.enc.Base64.parse(encryptedText);
      const iv = CryptoJS.lib.WordArray.create(
        encryptedData.words.slice(0, 4), 
        16
      );
      const ciphertext = CryptoJS.lib.WordArray.create(
        encryptedData.words.slice(4),
        encryptedData.sigBytes - 16
      );
      const decrypted = CryptoJS.AES.decrypt({ ciphertext }, key, { iv });
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      if (!decryptedText) {
        alert("Invalid decryption key or corrupted text.");
        return;
      }
      setDecryptedText(decryptedText);
    } catch (error) {
      console.error("Error decrypting:", error);
    }
  };

  return (
    <div className="container">
      <h1>AES Encryption/Decryption</h1>
      <p className="description">
        AES is a symmetric key algorithm used to encrypt and decrypt data. It's
        widely used for securing sensitive data.
      </p>

      <div className="content">
        <div className="encryption">
          <h2>Encryption</h2>
          <label htmlFor="encryptText">Enter text to be Encrypted:</label>
          <textarea
            id="encryptText"
            rows="3"
            placeholder="Enter Plain Text..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>

          <label htmlFor="secretKey">Enter Secret Key:</label>
          <input
            type="text"
            id="secretKey"
            placeholder="Enter Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />

          <label htmlFor="outputFormat">Output Text Format:</label>
          <select
            id="outputFormat"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
          >
            <option value="Base64">Base64</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>

          <button className="ui-btn" onClick={handleEncrypt}>
            <span>Encrypt</span>
          </button>

          <div className="result-box">
            <label>Encrypted Text:</label>
            <textarea
              id="encryptResult"
              rows="2"
              value={encryptedText}
              readOnly
            ></textarea>
          </div>
        </div>

        <div className="decryption">
          <h2>Decryption</h2>
          <label htmlFor="decryptText">Enter text to be Decrypted:</label>
          <textarea
            id="decryptText"
            rows="3"
            placeholder="Enter Encrypted Text..."
            value={encryptedText}
            onChange={(e) => setEncryptedText(e.target.value)}
          ></textarea>

          <label htmlFor="secretKeyDecrypt">Enter Secret Key:</label>
          <input
            type="text"
            id="secretKeyDecrypt"
            placeholder="Enter Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />

          <label htmlFor="inputFormat">Input Text Format:</label>
          <select
            id="inputFormat"
            value={inputFormat}
            onChange={(e) => setInputFormat(e.target.value)}
          >
            <option value="Base64">Base64</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>

          <button className="ui-btn" onClick={handleDecrypt}>
            <span>Decrypt</span>
          </button>

          <div className="result-box">
            <label>Decrypted Text:</label>
            <textarea
              id="decryptResult"
              rows="2"
              value={decryptedText}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AES;
