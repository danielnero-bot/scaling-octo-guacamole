import "../styles/termsofservice.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";


const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="terms-container">
        <h1>Quick Plate – Terms of Service</h1>
        <p className="effective-date">Effective Date: 19th Oct 2025</p>

        <p>
          Welcome to Quick Plate! These Terms of Service (“Terms”) govern your
          use of our website, online ordering system, and any related services
          provided by Quick Plate (“we,” “us,” or “our”). By accessing or using
          our services, you agree to these Terms.
        </p>

        <section>
          <h2>1. Use of Our Services</h2>
          <ul>
            <li>You must be at least 18 years old or have parental consent.</li>
            <li>
              You agree to provide accurate information when placing an order.
            </li>
            <li>
              You may not use our services for unlawful or unauthorized
              purposes.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Orders and Payments</h2>
          <ul>
            <li>
              All prices are listed in Nigerian Naira (₦) unless stated
              otherwise.
            </li>
            <li>Orders are confirmed only after successful payment.</li>
            <li>
              Once confirmed, cancellations or refunds may not be possible
              unless due to our error.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Delivery and Pickup</h2>
          <ul>
            <li>
              Delivery times are estimates and may vary due to conditions.
            </li>
            <li>
              Customers are responsible for providing correct delivery details.
            </li>
            <li>Please collect pickup orders promptly when notified.</li>
          </ul>
        </section>

        <section>
          <h2>4. Allergies and Food Information</h2>
          <p>
            Our meals are prepared in shared kitchens and may contain allergens.
            Please contact us before ordering if you have food allergies or
            dietary restrictions.
          </p>
        </section>

        <section>
          <h2>5. Promotions and Offers</h2>
          <p>
            Promotions and discounts are time-limited and may change without
            notice. Offers cannot be combined unless stated otherwise.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All content on our website, including logos, images, and menus, is
            owned by Quick Plate. You may not copy or reuse content without our
            written permission.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            Quick Plate is not responsible for delays, damages, or losses beyond
            our control. Our total liability for any claim shall not exceed the
            amount paid for the specific order in question.
          </p>
        </section>

        <section>
          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updated versions will
            be posted on our website with a revised effective date.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have questions or concerns, please contact us at:
            <br />
            <strong>Email:</strong> nero80311@gmail.com
          </p>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default TermsOfService;
