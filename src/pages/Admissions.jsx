import Navbar from "../components/Navbar";
import "../styles/Admissions.css";
import Footer from "../components/Footer";

function Admissions() {
  return (
    <>
      <Navbar />

      <div className="admissions-page">
        <h1>Admissions & Contact</h1>

        <form className="admission-form">
          <input
            type="text"
            placeholder="Student Name"
          />

          <input
            type="text"
            placeholder="Parent Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Class"
          />

          <textarea
            placeholder="Message"
            rows="5"
          ></textarea>

          <button type="submit">
            Submit Enquiry
          </button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Phone:</strong> +91 99014 67801
          </p>

          <p>
            <strong>Address:</strong>
            {" "}Chikkabanavara, Karnataka 560107
          </p>

          <p>
            <strong>Timings:</strong>
            {" "}Monday - Friday | 6:30 AM - 8:30 AM
          </p>

          <a
            href="https://wa.me/919901467801"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admissions;