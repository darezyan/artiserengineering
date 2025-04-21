import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h4>CONTACT</h4>
      <h2>Get in touch with our team!</h2>
      <div className="contact-content">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>
            Plot 15, Biosa Amantu Street,
Off DLA Road, Asaba, Delta State.

            </p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>08034083583</p>
          </div>
          <div className="open-hours">
            <strong>Open Hours:</strong>
            <p>Mon – Fri: 8 am – 5 pm,</p>
            <p>Saturday & Sunday: CLOSED</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <label>LEAVE YOUR MESSAGE</label>
          <textarea placeholder="Type your message ..." rows={6}></textarea>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <button type="submit">
            <FaPaperPlane className="btn-icon" />
            SEND NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
