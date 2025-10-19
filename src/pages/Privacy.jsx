import '../styles/privacy.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'
export default function Privacy() {
    return(
        <>
        <Navbar />
            <div class="privacy-container">
    <h2>Privacy Policy</h2>
    <div class="policy-section">
      <div class="policy-item">
        <h3>1. Information We Collect</h3>
        <p>
          We collect information that you provide to us directly, such as when
          you create an account, place an order, or contact us. This may include
          your name, email address, phone number, and payment information. We
          also collect information automatically when you use our website, such
          as your IP address and browsing behavior.
        </p>
      </div>

      <div class="policy-item">
        <h3>2. How We Use Your Information</h3>
        <p>
          We use your information to provide and improve our services, process
          your orders, communicate with you, and personalize your experience. We
          may also use your information for marketing purposes, but you can opt
          out at any time.
        </p>
      </div>

      <div class="policy-item">
        <h3>3. Information Sharing</h3>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with our service providers who help us
          operate our business, or as required by law.
        </p>
      </div>

      <div class="policy-item">
        <h3>4. Data Security</h3>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </div>

      <div class="policy-item">
        <h3>5. Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal
          information. You can also object to or restrict the processing of your
          personal information. To exercise these rights, please contact us.
        </p>
      </div>

      <div class="policy-item">
        <h3>6. Changes to This Policy</h3>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new policy on this page. We
          encourage you to review this policy periodically for any changes.
        </p>
      </div>
    </div>

    <p class="closing">
      <strong>Quick Plate</strong> is committed to protecting your privacy and
      providing a safe, reliable online experience.
    </p>
  </div>
  <Footer />
        </>
    )
}