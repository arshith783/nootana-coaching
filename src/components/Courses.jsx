import "../styles/Courses.css";

function Courses() {
  return (
    <section className="courses">
      <div className="courses-container">

        <h2>Courses Offered</h2>

        <div className="course-cards">

          <div className="course-card">
            <h3>School Tuition</h3>

            <p>
              Classes 1 to 10
            </p>

            <ul>
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
              <li>Social Studies</li>
            </ul>
          </div>

          <div className="course-card">
            <h3>PUC Commerce</h3>

            <p>
              Comprehensive coaching for commerce students.
            </p>

            <ul>
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Courses;