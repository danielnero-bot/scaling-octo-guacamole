import { Link } from "react-router-dom";
export default function Navbar(){
      return (
        <>
          <header class="app-header">
            <div class="header-container">
              <Link to="/" class="brand">
                <Link class="brand-icon" to="/">
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
                </Link>
                <h2 class="brand-title">Quick Plate</h2>
              </Link>

              <div class="nav-section">
                <div className="nav-links">
                  <Link to="/about">About</Link>
                  <Link to="/menu">Menu</Link>
                  <Link to="/contact">Contact</Link>
                </div>
                <div class="button">
                  <button class="btn-primary">
                    <Link to="/login">Order Online</Link>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </>
      );
}
