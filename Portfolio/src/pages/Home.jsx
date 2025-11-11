import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Work from '../components/Work';
import ScrollDown from '../components/ScrollDown';
import '../styles/pages/home.css';

const Home = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const splashScreen = document.getElementById("splash-screen");
      if (splashScreen) {
        splashScreen.classList.add("ss-anim");
        setHasAnimated(true);
      }
    }
  }, [hasAnimated]);

  return (
    <>
      {/* Splash Screen */}
      <div className="ss-container" id="splash-screen">
        <span>Welcome.</span>
      </div>

      {/* Home Page Component */}
      <section className="container-fluid" data-section="ek">
        <div className="part-1">
          <div className="hero-text flex-column part-left">
            <h1>Hi, I am</h1>
            <h2 className="rohit">Rohit.</h2>
            <Link className="btn hero-btn" to="/resume">View CV</Link>
            <h2 className="fs-dev">Full Stack Developer.</h2>
            <p>03 years of Experience.</p>
          </div>

          <div className="cards-container">
            <div className="desc hero-card">
              <h5>Website Development</h5>
              <p>Based in India, I thrive in creating impactful digital experiences.</p>
            </div>

            <div className="desc hero-card">
              <h5>Single Page Applications</h5>
              <p>I utilize technologies like React.js to build user engaging web applications.</p>
            </div>

            <div className="desc hero-card">
              <h5>Design Principles</h5>
              <p>Simplicity & Clarity, A great design is born of these two things.</p>
            </div>
          </div>
        </div>
        <div className="anim-cont">
          <ScrollDown />
        </div>
      </section>

      <section className="container-2" data-section="do">
        <div className="part-2 container-fluid">
          <div className="part-left">
            <h1>
              I code & <br />
              build stuff
            </h1>
            <p>
              Turning designs into
              real life products, web apps
              and experimentals.
            </p>
            <Link to="/projects">
              <button className="btn">See my Projects <i className="bi bi-arrow-right ps-2"></i></button>
            </Link>
          </div>
          <div className="part-right">
            <h1>
              I click pictures,<br />
              sometimes
            </h1>
            <p>
              Capturing the nature, beautiful skies,
              random objects,
              interesting venues.
            </p>
            <a href='https://www.instagram.com/throughaphonelens_/' target="_blank">
              <button className="btn">Check out Gallery <i className="bi bi-arrow-right ps-2"></i></button>
            </a>
            <div>
              <span className="warning-text">*Clicking on this will redirect you to Instagram</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-3" data-section="teen">
        <Work />
      </section>
    </>
  )
}

export default Home