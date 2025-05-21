import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleDES = () => {
    navigate("/DES");
  };
  const handleSHA256 = () => {
    navigate("/SHA256");
  };
  const handleSHA512 = () => {
    navigate("/SHA512");
  };
  const handleRSA = () => {
    navigate("/RSA");
  };
  const handleAES = () => {
    navigate("/AES");
  };

  return (
    <div class="container">
      <h1>VALTIFY</h1>
      <p class="description">
        Dive into VALTIFY: hands-on learning, customizable cryptographic
        algorithms, and real-time visualization of SHA-256, SHA-512, AES, Triple
        DES encryption and RSA.
      </p>
      <div class="cards">
        <div class="flip-card" onClick={handleRSA}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>RSA</h2>
              <p>
                RSA algorithm is an asymmetric cryptography algorithm.
                Asymmetric means that it works on two different keys i.e. Public
                Key and Private Key.
              </p>
            </div>
            <div class="flip-card-back">
              <h2>RSA</h2>
              <p>
                Click to learn more about RSA encryption and its real-world
                applications!
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card" onClick={handleDES}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Triple DES</h2>
              <p>
                (3DES) — Symmetric-key encryption algorithm applying DES cipher
                three times per data block for enhanced security.
              </p>
            </div>
            <div class="flip-card-back">
              <h2>Triple DES</h2>
              <p>
                Explore how Triple DES strengthens data encryption through
                layered cipher application.
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card" onClick={handleAES}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>AES</h2>
              <p>
                Advanced Encryption Standard (AES) is a specification for the
                encryption of electronic data established by the U.S.
              </p>
            </div>
            <div class="flip-card-back">
              <h2>AES</h2>
              <p>
                Dive into AES encryption and discover its role in securing data
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card" onClick={handleSHA256}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>SHA-256</h2>
              <p>
                SHA-256 is a widely used cryptographic hash algorithm that
                produces a 256-bit (32-byte) hash value from input data.
              </p>
            </div>
            <div class="flip-card-back">
              <h2>SHA-256</h2>
              <p>
                Learn how SHA-256 protects data integrity in blockchain and
                beyond.
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card" onClick={handleSHA512}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>SHA-512</h2>
              <p>
                SHA-512, a variant of the Secure Hash Algorithm, produces a
                512-bit (64-byte) hash value from input data.
              </p>
            </div>
            <div class="flip-card-back">
              <h2>SHA-512</h2>
              <p>
                Explore SHA-512’s robust hashing capabilities for secure data
                verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
