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
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        <section className="welcome">
          <h2>Welcome back, John!</h2>
        </section>

        {/* Recent Orders */}
        <section className="orders">
          <h3>Recent Orders</h3>
          <div className="orders-list">
            <div className="order-card">
              <div className="order-info">
                <div>
                  <p className="order-name">Spaghetti Carbonara</p>
                  <p className="order-meta">July 12, 2024 - $15.99</p>
                </div>
                <button className="reorder-btn">Reorder</button>
              </div>
              <div
                className="order-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1601924582971-dfba7c88c0e7')",
                }}
              ></div>
            </div>

            <div className="order-card">
              <div className="order-info">
                <div>
                  <p className="order-name">Margherita Pizza</p>
                  <p className="order-meta">July 5, 2024 - $12.99</p>
                </div>
                <button className="reorder-btn">Reorder</button>
              </div>
              <div
                className="order-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1548365328-9a88f5f17b30')",
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn">
              <span className="material-symbols-outlined">restaurant_menu</span>
              <span>Order Now</span>
            </button>
            <button className="action-btn">
              <span className="material-symbols-outlined">event_seat</span>
              <span>Make a Reservation</span>
            </button>
            <button className="action-btn">
              <span className="material-symbols-outlined">menu_book</span>
              <span>View Full Menu</span>
            </button>
          </div>
        </section>
      </main>

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
