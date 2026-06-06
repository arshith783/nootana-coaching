import "../styles/About.css";
function About() {
  return (
    <section className="about">
      <div className="about-container">

        <h2>About Us</h2>

        <p>
          Nootana Coaching Centre is committed to helping students
          achieve academic excellence through quality teaching,
          regular assessments, and personal attention.
        </p>

        <div className="features">

          <div className="feature-card">
            <h3>Student-Friendly Environment</h3>
            <p>
              A supportive atmosphere that encourages learning
              and confidence.
            </p>
          </div>

          <div className="feature-card">
            <h3>Experienced Faculty</h3>
            <p>
              Dedicated teachers focused on helping students
              reach their full potential.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;