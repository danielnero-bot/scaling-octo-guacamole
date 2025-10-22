import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { getAuth } from "firebase/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // 👇 Check Firebase Auth state
  const handleOrderClick = () => {
    const user = auth.currentUser;

    if (user) {
      navigate("/dashboard"); // redirect if logged in
    } else {
      navigate("/login"); // go to login/signup if not
    }

    closeMenu();
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Brand / Logo */}
        <Link to="/" className="brand">
          <div className="brand-icon">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="brand-title">Quick Plate</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-section">
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="button">
            <button className="btn-primary" onClick={handleOrderClick}>
              Order Online
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-nav" onClick={toggleMenu}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu-dropdown">
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/menu" onClick={closeMenu}>
            Menu
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <button onClick={handleOrderClick} className="mobile-btn">
            Order Online
          </button>
        </div>
      )}
    </header>
  );
}
