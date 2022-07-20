import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footerL">All rights reserved © 2022 Seoulbox</div>
      <div className="footerR">
        <Link to="faq">FAQ</Link>
        <Link to="terms">Terms of Service</Link>
        <Link to="privacy">Privacy Policy</Link>
        <Link to="shipping">Shipping</Link>
      </div>
    </div>
  );
}

export default Footer;
