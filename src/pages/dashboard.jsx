import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="qp-dashboard">
      {/* Sidebar */}
      <aside className="qp-sidebar">
        <div>
          <div className="qp-sidebar-header">
            <svg
              className="qp-logo"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="qp-title">Quick Plate</h1>
          </div>

          <nav className="qp-nav">
            <a href="#" className="qp-nav-item active">
              <span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
            <a href="#" className="qp-nav-item">
              <span className="material-symbols-outlined">receipt_long</span> Orders
            </a>
            <a href="#" className="qp-nav-item">
              <i class="fa-solid fa-user"></i> Account
            </a>
          </nav>
        </div>

        <div>
          <a href="#" className="qp-nav-item logout">
            <i class="fa-solid fa-right-from-bracket"></i> Logout
          </a>
        </div>
      </aside>

      {/* Main Section */}
      <main className="qp-main">
        <section className="qp-welcome">
          <div>
            <h2>Welcome back, Daniel 👋</h2>
            <p>Ready to order something delicious today?</p>
          </div>
          <a href="#" className="qp-btn-primary">
            View Menu
          </a>
        </section>

        {/* Dashboard Cards */}
        <section className="qp-grid">
          <div className="qp-card">
            <div className="qp-card-header">
              <h3>Active Orders</h3>
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="qp-card-body">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg0g_h7IihNPlr27uydGZyujhidycLyoHBxfAsIrXvAVEINnk7W1BoswfpXBl11JCcdIEMYpDz-2KqCy2EP3u7kkAKnp01M8dyrlNop1Uakgb_wRT8M9ux68Md4-emhN6lcMthiwAF0M6Upfbc0Z-8xfRNDEkYmaULgf7qCSwPmEcKquxUdWJztioy755UWG8HW0WI9NSzBkBP3B17nozycKOf7SZCodytm9eDBzs_XM-M530B2eLQ8BhaySqxnWREORgk7SbGELou"
                alt="Empty orders"
              />
              <p>You have no active orders.</p>
            </div>
          </div>

          <div className="qp-card">
            <div className="qp-card-header">
              <h3>Past Orders</h3>
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div className="qp-card-body">
              <div className="qp-order-item">
                <div>
                  <p className="qp-order-name">Grilled Salmon</p>
                  <p className="qp-order-date">Ordered on May 20, 2024</p>
                </div>
                <a href="#" className="qp-btn-outline">
                  Reorder
                </a>
              </div>

              <div className="qp-order-item">
                <div>
                  <p className="qp-order-name">Vegetable Stir-Fry</p>
                  <p className="qp-order-date">Ordered on May 18, 2024</p>
                </div>
                <a href="#" className="qp-btn-outline">
                  Reorder
                </a>
              </div>
              <a href="#" className="qp-btn-secondary full">
                View All Orders
              </a>
            </div>
          </div>

          <div className="qp-card">
            <div className="qp-card-header">
              <h3>Profile Settings</h3>
              <i class="fa-solid fa-gear"></i>
            </div>
            <div className="qp-card-body">
              <p>Manage your account details, addresses, and payment methods.</p>
              <div className="qp-profile-info">
                <span className="material-symbols-outlined"></span>
                <span>daniel@example.com</span>
              </div>
              <div className="qp-profile-info">
                <span className="material-symbols-outlined">phone</span>
                <span>+234 801 234 5678</span>
              </div>
              <a href="#" className="qp-btn-primary full">
                Go to Settings
              </a>
            </div>
          </div>
        </section>

        <section className="qp-special">
          <div className="qp-special-content">
            <h3>🔥 Today’s Special</h3>
            <p>
              Get <strong>20% off</strong> orders above ₦3,000!
            </p>
          </div>
          <a href="#" className="qp-btn-light">
            Order Now
          </a>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
