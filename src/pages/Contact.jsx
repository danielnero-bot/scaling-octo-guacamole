import '../styles/contact.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Contact() {
  return (
    <section>
    <div className="contact-container">
      <Navbar/>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="dashboard-heading">
            <h1>Contact Us</h1>
            <p>
              We're here to help! Reach out to us with any questions or feedback.
            </p>
          </div>

          

          <div className="dashboard-grid">
            <div className="dashboard-location">
              <h2>Our Location</h2>
              <p>
                Visit us at our flagship location in the heart of Anytown. We're
                easily accessible and offer ample parking.
              </p>

              <div className="dashboard-info">
                <div className="dashboard-info-item">
                  <span className="dashboard-info-label">Address</span>
                  <span>13 Timothy Lane Rumuola, Port Harcort</span>
                </div>
                <div className="dashboard-info-item">
                  <span className="dashboard-info-label">Opening Hours</span>
                  <span>
                    Monday - Friday: 11 AM - 10 PM
                    <br />
                    Saturday - Sunday: 10 AM - 11 PM
                  </span>
                </div>
                <div className="dashboard-info-item">
                  <span className="dashboard-info-label">Phone</span>
                  <span>+234(0)8069132153 </span>
                </div>
                <div className="dashboard-info-item">
                  <span className="dashboard-info-label">Email</span>
                  <span>nero80311@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="dashboard-form-section">
              <h2>Send Us a Message</h2>
              <form className="dashboard-form">
                <div className="dashboard-form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=""
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="dashboard-form-group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="dashboard-form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder=""
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit" className="dashboard-btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

     <Footer/>
    </div>

    </section>
  );
}
export default Contact;
