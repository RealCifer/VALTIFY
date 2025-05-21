import React from "react";
import "../styles/Explore.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home");
  };
  return (
    <div>
      <div class="container">
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="title">Valtify</div>
        <div class="subtitle">Your Key to Secure Communication</div>
        <button
          class="button"
          style={{ "--clr": "#7808d0" }}
          onClick={handleNavigation}
        >
          <span class="button__icon-wrapper">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="button__icon-svg"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              class="button__icon-svg button__icon-svg--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Explore Valtify
        </button>
      </div>
    </div>
  );
};

export default Explore;
