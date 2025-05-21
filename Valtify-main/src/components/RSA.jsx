import React, { useState } from "react";
import "../styles/RSA.css";
import JSEncrypt from "jsencrypt";

const RSA = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [keySize, setKeySize] = useState(512);
  const [manualPublicKey, setManualPublicKey] = useState("");
  const [plainText, setPlainText] = useState("");
  const [manualPrivateKey, setManualPrivateKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [result, setResult] = useState("");

  const generateKeys = () => {
    const encryptor = new JSEncrypt({ default_key_size: keySize });

    const publicKey = encryptor
      .getPublicKey()
      .replace(/\r?\n|\r/g, "")
      .replace("-----BEGIN PUBLIC KEY-----", "")
      .replace("-----END PUBLIC KEY-----", "");

    const privateKey = encryptor
      .getPrivateKey()
      .replace(/\r?\n|\r/g, "")
      .replace("-----BEGIN RSA PRIVATE KEY-----", "")
      .replace("-----END RSA PRIVATE KEY-----", "");

    setPublicKey(publicKey);
    setPrivateKey(privateKey);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Copy to clipboard failed: ", error);
        alert("Failed to copy to clipboard.");
      });
  };
  const encrypt = () => {
    const encryptor = new JSEncrypt({ default_key_size: keySize });
    encryptor.setPublicKey(manualPublicKey);

    const plainText = document.getElementById("plain-text").value;
    const encryptedText = encryptor.encrypt(plainText);

    setEncryptedText(encryptedText);
    setResult(encryptedText);
  };

  const decrypt = () => {
    const rsaDecryptor = new JSEncrypt();
    rsaDecryptor.setPrivateKey(manualPrivateKey);

    const encryptedText = document.getElementById("encrypted-text").value;
    const decryptedText = rsaDecryptor.decrypt(encryptedText);

    if (decryptedText === false) {
      alert(
        "Decryption failed. Please check your private key and encrypted text."
      );
    } else {
      setEncryptedText(encryptedText);
      setResult(decryptedText);
    }
  };

  const setManualPublicKeyHandler = (e) => {
    setManualPublicKey(e.target.value);
  };

  const setManualPrivateKeyHandler = (e) => {
    setManualPrivateKey(e.target.value);
  };

  return (
    <div>
      <div class="container">
        <h1>Generate RSA Keys</h1>
        <div class="key-gen">
          <label for="key-size">Select RSA Key Size</label>
          <select
            id="key-size"
            onChange={(e) => setKeySize(parseInt(e.target.value))}
          >
            <option value="512">512 bits</option>
            <option value="1024">1024 bits</option>
            <option value="2048">2048 bits</option>
          </select>
          <button class="ui-btn" id="gen-rsa-key" onClick={generateKeys}>
            <span>Generate RSA Key Pair</span>
          </button>
          <div class="keys">
            <div class="key-box">
              <h2>
                Public Key
                <button
                  class="ui-btn"
                  onClick={() => copyToClipboard(publicKey)}
                >
                  <span>Copy</span>
                </button>
              </h2>
              <textarea
                id="public-key"
                cols="30"
                readonly
                value={publicKey}
              ></textarea>
            </div>
            <div class="key-box">
              <h2>
                Private Key
                <button
                  class="ui-btn"
                  onClick={() => copyToClipboard(privateKey)}
                >
                  <span>Copy</span>
                </button>
              </h2>
              <textarea id="private-key" readonly value={privateKey}>
                Your private key will appear here
              </textarea>
            </div>
          </div>
        </div>

        <div class="rsa-encryption-decryption">
          <div class="rsa-encryption">
            <h2>RSA Encryption</h2>
            <textarea
              id="pub-key"
              rows="1"
              cols="50"
              value={manualPublicKey}
              onChange={setManualPublicKeyHandler}
              placeholder="Enter Public Key"
            ></textarea>
            <textarea
              placeholder="Enter Plain Text"
              id="plain-text"
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
            ></textarea>
            <button class="ui-btn" onClick={encrypt}>
              <span>Encrypt</span>
            </button>
          </div>
          <div class="rsa-decryption">
            <h2>RSA Decryption</h2>
            <textarea
              id="priv-key"
              rows="1"
              cols="50"
              value={manualPrivateKey}
              onChange={setManualPrivateKeyHandler}
              placeholder="Enter Private Key"
            ></textarea>
            <textarea
              placeholder="Enter Encrypted Text"
              id="encrypted-text"
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
            ></textarea>
            <button class="ui-btn" onClick={decrypt}>
              <span>Decrypt</span>
            </button>
          </div>
        </div>

        <div class="result">
          <h2>Result</h2>
          <textarea id="result" cols="50" readonly value={result}></textarea>
        </div>

        <div class="info">
          <h2>Encryption</h2>
          <p>
            RSA encryption uses the recipient's public key to transform
            plaintext into secure ciphertext. The sender obtains the public key,
            breaks the message into numerical blocks, and applies modular
            arithmetic to generate the encrypted data.
          </p>

          <h2>Decryption</h2>
          <p>
            RSA decryption, done with the recipient's private key, reverses the
            process. The ciphertext is decrypted using the private key,
            revealing the original plaintext. RSA's security rests on the
            challenge of factoring large primes, ensuring secure communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSA;
