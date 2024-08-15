import React from 'react';
import reactLogo from "../../Images/react.png";

const LogoSpinner = () => (
  <div className="logo-spinner-overlay">
    <img src={reactLogo} alt="Loading..." className="logo-spinner" />
  </div>
);

export default LogoSpinner;