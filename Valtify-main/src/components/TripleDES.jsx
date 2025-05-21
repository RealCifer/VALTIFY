import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "../styles/TripleDES.css";

const TripleDES = () => {
  const [encryptResult, setEncryptResult] = useState("");
  const [decryptResult, setDecryptResult] = useState("");

  const handleEncrypt = () => {
    const plainText = document.getElementById("encryptText").value;
    const secretKey = document.getElementById("secretKey").value;
    const outputFormat = document.getElementById("outputFormat").value;

    if (!plainText || !secretKey) {
      alert("Please enter both text and secret key for encryption.");
      return;
    }

    try {
      const encrypted = CryptoJS.TripleDES.encrypt(
        plainText,
        secretKey
      ).toString();

      setEncryptResult(
        outputFormat === "Hexadecimal"
          ? CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Hex)
          : encrypted
      );
    } catch (error) {
      alert("Encryption failed. Please check your input.");
      console.error("Encryption Error:", error);
    }
  };
  const handleDecrypt = () => {
    const encryptedText = document.getElementById("decryptText").value;
    const secretKeyDecrypt = document.getElementById("secretKeyDecrypt").value;
    const inputFormat = document.getElementById("inputFormat").value;

    if (!encryptedText || !secretKeyDecrypt) {
      alert("Please enter both encrypted text and secret key for decryption.");
      return;
    }

    try {
      const formattedEncryptedText =
        inputFormat === "Hexadecimal"
          ? CryptoJS.enc.Hex.parse(encryptedText).toString(CryptoJS.enc.Base64)
          : encryptedText;

      const decrypted = CryptoJS.TripleDES.decrypt(
        formattedEncryptedText,
        secretKeyDecrypt
      ).toString(CryptoJS.enc.Utf8);

      if (!decrypted) {
        throw new Error("Invalid decryption.");
      }

      setDecryptResult(decrypted);
    } catch (error) {
      alert("Decryption failed. Please check your input.");
      console.error("Decryption Error:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Triple DES Encryption/Decryption</h1>

        <div className="content">
          <div className="encryption">
            <h2>Encryption</h2>
            <p>
              Enter text and the secret key to encrypt. You can choose between
              Base64 or Hexadecimal format for the output.
            </p>

            <label htmlFor="encryptText">Enter text to be Encrypted</label>
            <textarea
              id="encryptText"
              rows="3"
              placeholder="Enter Plain Text..."
            ></textarea>

            <label htmlFor="secretKey">Enter Secret Key</label>
            <input type="text" id="secretKey" placeholder="Enter Secret Key" />

            <label htmlFor="outputFormat">Output Text Format:</label>
            <select id="outputFormat">
              <option value="Base64">Base64</option>
              <option value="Hexadecimal">Hexadecimal</option>
            </select>

            <button className="ui-btn" onClick={handleEncrypt}>
              <span>Triple DES Encrypted Output</span>
            </button>

            <div className="result-box">
              <label>Encryption Result:</label>
              <textarea
                id="encryptResult"
                rows="2"
                value={encryptResult}
                readOnly
              ></textarea>
            </div>
          </div>

          <div className="decryption">
            <h2>Decryption</h2>
            <p>
              Enter the encrypted text and the secret key to decrypt. Choose
              between Base64 or Hexadecimal format for the input.
            </p>

            <label htmlFor="decryptText">Enter text to be Decrypted</label>
            <textarea
              id="decryptText"
              rows="3"
              placeholder="Enter Encrypted Text..."
            ></textarea>

            <label htmlFor="secretKeyDecrypt">Enter Secret Key</label>
            <input
              type="text"
              id="secretKeyDecrypt"
              placeholder="Enter Secret Key"
            />

            <label htmlFor="inputFormat">Input Text Format:</label>
            <select id="inputFormat">
              <option value="Base64">Base64</option>
              <option value="Hexadecimal">Hexadecimal</option>
            </select>

            <button className="ui-btn" onClick={handleDecrypt}>
              <span>Triple DES Decrypted Output</span>
            </button>

            <div className="result-box">
              <label>Decryption Result:</label>
              <textarea
                id="decryptResult"
                rows="2"
                value={decryptResult}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleDES;
