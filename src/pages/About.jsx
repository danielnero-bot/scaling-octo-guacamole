import "../styles/about.css";
import React from "react";

import Navbar from '../components/Navbar'
import managerAvatar from  '../assets/images/restaurantmanager.jpg'
import chef from '../assets/images/chef.jpg'
import founder from '../assets/images/founder.jpg'
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="page">
      <Navbar></Navbar>
      {/* Main */}
      <main className="main">
        <div className="content">
          <div className="hero-section">
            <div
              className="hero-bg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD00BVBi_uRAVlbxK3-W8kcjXbcFtp319Mukn9XBgk3BeZmxKHO_y9_hSI49zbIit_bU9BMDlwjJKwKtfLl6dV2UsKfcDbYxM7jeAj23KBaoPE-73FcSVhgMeLxDAw9e-4Jm6Le8JeSrsDXIvvIBJAvoFtP_WcxZY9KdSDXS3QUOABGQXt3dT7cdZ9_CdHrPueQlRASzVitsKgPCQOQED_KcWVF-9euFwReHsHUzk3y9r8slPwVYcHMBY6rBey94E1dnYlG76-J0XOi")',
              }}
            ></div>
            <div className="hero-overlay">
              <h1>Our Story</h1>
            </div>
          </div>

          <section className="section">
            <h2>From Our Kitchen to Your Table</h2>
            <p> Quick Plate began with a simple
              idea — to bring fresh, flavorful, and heartwarming meals to our
              community with the ease and speed of modern service. What started
              as a small dream in a home kitchen has grown into a vibrant dining
              experience that celebrates taste, comfort, and connection. Founded
              by Mr. Daniel Nero , Quick Plate is a reflection of her lifelong
              passion for food and her belief that great meals have the power to
              bring people together. Each recipe on our menu tells a story —
              from family-inspired classics passed down through generations to
              creative new dishes that celebrate the diversity of local flavors.
              We are deeply committed to quality. That’s why we source our
              ingredients from trusted local farmers, fishermen, and artisans
              who share our values of freshness and sustainability. Every
              tomato, every spice, and every grain that enters our kitchen is
              carefully selected to ensure it meets the high standards we
              promise our guests. Our mission goes beyond just serving food — we
              aim to serve warmth, comfort, and community with every plate.
              Whether you’re dining in, grabbing a quick meal on the go, or
              ordering online for family night, Quick Plate brings that homemade
              feeling of care and nourishment straight to your table.
            </p>
          </section>

          <section className="section">
            <h2 className="center">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-photo" style={{ backgroundImage: `url(${founder})` }}  ></div>
                <h3>Mr Daniel Nero</h3>
                <p className="role">Founder & Head Chef</p>
              </div>

              <div className="team-member">
                <div className="team-photo"style={{ backgroundImage: `url(${chef})`}} ></div>
                <h3>Chef. Victor </h3>
                <p className="role">Culinary Expert</p>
              </div>

              <div className="team-member">
                <div className="team-photo" style={{ backgroundImage: `url(${managerAvatar})` }}></div>
                <h3>Favour</h3>
                <p className="role">Restaurant Manager</p>
              </div>
            </div>

            <p className="description">
              Our team is the heart of Quick Plate. Each member brings a unique
              set of skills and a shared commitment to excellence. From our
              chefs in the kitchen to our friendly staff, we work together to
              create a welcoming and enjoyable experience for every guest.
            </p>
          </section>

          <section className="section">
            <h2>Our Philosophy</h2>
            <p>
              At Quick Plate, we are dedicated to more than just serving food;
              we aim to create memorable dining experiences. Our philosophy
              centers on three core values: quality, community, and
              sustainability. We are committed to using the freshest
              ingredients, supporting our local community, and minimizing our
              environmental impact.
            </p>
          </section>

          <div className="button-wrapper">
            <Link to="/menu " className="view-menu-btn">View Our Menu</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
