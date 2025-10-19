import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <>
        <footer class="app-footer">
          <div class="footer-container">
            <div class="footer-top">
              <div class="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <a href="#">Terms of Service</a>
              </div>
              <div class="footer-icons">
                <a href="#" class="icon">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="icon">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="icon">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <p class="footer-bottom">
              © 2025 Quick Plate. All rights reserved. | Made by Nero
            </p>
          </div>
        </footer>
      </>
    );
}