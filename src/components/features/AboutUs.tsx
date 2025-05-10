import "./AboutUs.css";
import Projects from "../Projects/Projects";
import TopBar from "../TopBar/TopBar";
import { assets } from "../../assets/Assets";

const AboutUs = () => {
  return (
<>
<TopBar />
<div className="aboutus">

      {/* Banner Section */}
      <div className="aboutus-banner">
        <div className="aboutus-overlay">
          <h1>About us</h1>
          <div className="aboutus-links">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="#projects">Projects</a></li>
  </ul>
</div>

        </div>
      </div>

      {/* Main Section */}
      <section className="aboutus-main">
        <div className="aboutus-content">
          <div className="aboutus-text">
            <h2>
            Building with Purpose: <br />
            Precision in Engineering and Project Execution
            </h2>
            <p>
            Arister Engineering Services is a full-spectrum engineering firm established in August 2005 (RC: 007585), delivering excellence across civil, mechanical, and electrical works. Our specialties include design, fabrication, construction, and general maintenance—executed with precision and professionalism.
            </p>
            <p>
            We are trusted contractors to Peculiar Consult, Nampak Nigeria Ltd, and Asaba Aluminium Co. Ltd., known for our quality-first approach, timely delivery, and client satisfaction. Our structured project supervision and adherence to best practices ensure consistent value and long-term impact across all project types.


            </p>
          </div>
          <div className="aboutus-image">
            <img src={assets.card} alt="construction crane" />
          </div>
        </div>

        <div className="aboutus-cta">
          <p>
            <strong>Want to know more about us?</strong> Just contact us
          </p>
          <a href="mailto:dareariyo68@yahoo.com">
              <button>Email us</button>
            </a>

        </div>

        <div className="aboutus-highlight">
          <h3>Expert Construction Teams Driving Continuous Process Improvements!</h3>
          <p>
            With a highly experienced construction team, we also specialize in
            providing project management and supervision services using critical
            pathways for continued process improvements for each project.
          </p>
        </div>

        <div className="aboutus-mission-vision">
          <div className="aboutus-box">
            <h4>Mission</h4>
            <p>
            Our mission is to build a world class company committed to meeting the expectation of our clients by consistently delivering services with the highest levels of professionalism and quality. We are committed to achieving a leading status in the industry by not only employing the best
            brains and hands but also by applying the most modern equipment and technology.
            </p>
          </div>
          <div className="aboutus-box">
            <h4>Vision</h4>
            <p>
            To be a benchmark of excellence in the engineering industry — recognized for our innovation, integrity, and unwavering commitment to delivering world-class solutions that shape the future of infrastructure and technology.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Projects />
</>
  );
};

export default AboutUs;
