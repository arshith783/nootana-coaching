import "../styles/Reviews.css";

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-container">

        <h2>What Students & Parents Say</h2>

        <div className="review-cards">

          <div className="review-card">
            <p>
              "An excellent coaching institute with a student-friendly environment."
            </p>
            <h4>- Naveen Gowda H R</h4>
          </div>

          <div className="review-card">
            <p>
              "Affordable fees, experienced staff."
            </p>
            <h4>- Kanasu Latha</h4>
          </div>

          <div className="review-card">
            <p>
              "A very good place for students to build strong knowledge and confidence."
            </p>
            <h4>- Sindhu U</h4>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;