import "../styles/dashboard.css"; // Regular CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <div className="header-inner">
          <div className="logo-section">
            <svg
              className="logo"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="title">Quick Plate</h1>
          </div>

          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
          </nav>

          <div className="profile">
            <button className="profile-btn">
              <i class="fa-solid fa-circle-user"></i>
            </button>
          </div>
        </div>
      </header>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2024 Quick Plate. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Social</a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
