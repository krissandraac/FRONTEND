import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../styles/Home.css";
import logo from "../assets/mmpc-logo.png";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="home-container">
      <div className="header">
        <img src={logo} alt="Mitsubishi Logo" className="logo" />
        <span className="header-title">Mitsubishi Motors Philippines Corporation</span>
      </div>
      <div className="content">
        <h1 className="welcome-text">Hello, User!</h1>
        <p className="choose-text">Choose your System</p>
        <div className="button-container">
          <button className="system-button" onClick={() => navigate("/menu-inventory")}>
            Inventory System
          </button>
          <div className="or-container">
            <span className="or-text">or</span>
          </div>
          <button className="system-button" onClick={() => navigate("/exitclearance-login")}>
            Exit Clearance System
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
