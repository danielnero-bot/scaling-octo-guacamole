import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
      <>
        <footer className="app-footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </div>
              <div className="footer-icons">
                <a
                  target="_blank"
                  href="https://web.facebook.com/people/Daniel-Nero/61573024959905/#"
                  className="icon"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/d.ne_ro?igsh=eTM4bHIwZjlsOTQ5"
                  className="icon"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-oghenero-b23937388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="icon"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <p className="footer-bottom">
              © 2025 Quick Plate. All rights reserved. | Made by Nero
            </p>
          </div>
        </footer>
      </>
    );
}