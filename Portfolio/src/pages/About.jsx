import { Link } from 'react-router-dom';
import '../styles/pages/about.css';
import abtImg from '../assets/abt-img.png';
import Contact from '../components/Contact';

const About = () => {
  return (
    <>
      <section className="container-fluid about-cont">
        <h3 className="header">ABOUT ME</h3>
        <div className="details">
          <div className="det-text col-6">
            <p>
              Hi there! I'm a software engineer with a passion for crafting innovative and user-friendly applications. My expertise spans both front-end and back-end development, and I’m always excited to explore new technologies to enhance performance and the overall user experience. I’m driven by curiosity and a desire to build meaningful digital solutions.
            </p>
            <p>
              Outside of coding, I’m an avid football player and a fitness enthusiast, committed to staying fit both physically and mentally. I’m also a nature lover, often trekking through new trails, and a mobile photographer, capturing moments from the world around me.
            </p>
            <p>
              I graduated in Information Science & Engineering from KLS Gogte Institute of Technology, Belgaum, where I developed a strong foundation in software development, problem-solving, and teamwork. My academic journey has shaped my analytical mindset and fueled my passion for tech.
            </p>
            <p>
              Beyond my studies, I’m a dedicated sportsperson who’s had the honor of representing my college and state in top-level football tournaments. I’ve won gold at the VTU Interzonal Football Tournament (2019) and Karnataka State Olympics (2017), as well as finishing as runners-up at the VTU Intercollegiate Football Tournament. I’m also a proud NCC cadet and a gold medalist in Snap Shooting at the All India Thal Sainik Camp (TSC), Delhi in 2011, where I represented the Karnataka & Goa contingent.
            </p>
            <p>
              These experiences have instilled in me qualities of leadership, discipline, and perseverance, which I bring into every professional challenge I tackle.
            </p>
          </div>
          <div className="det-img-cont col-6">
            <img className="about-img" src={abtImg} alt="A picture of Rohit Ashtekar" />
          </div>
        </div>
        {/* <div className="btn-container">
          <button className="btn btn-outline-warning p-3">
          DOWNLOAD CV <svg viewBox="0 13 60 47.997" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M29.283 12.19a19.624 19.624 0 015.434 0 2 2 0 00.567-3.959 23.75 23.75 0 00-6.566 0 2 2 0 00.565 3.959z"></path><path d="M42.91 10.619a2 2 0 00-1.82 3.561C47.819 17.621 52 24.449 52 32c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-7.551 4.181-14.379 10.911-17.819a2 2 0 00-1.821-3.561C13.016 14.747 8 22.939 8 32c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24 0-9.061-5.016-17.253-13.09-21.381z"></path><path d="M22.586 36.586a2 2 0 000 2.828l8 8c.39.391.902.586 1.414.586s1.023-.195 1.414-.586l8-8a2 2 0 10-2.828-2.828L34 41.172V18a2 2 0 00-4 0v23.172l-4.586-4.586a2 2 0 00-2.828 0z"></path></svg>
          </button>
          </div> */}
      </section>
          <Link to="/resume">
          <div className="abt-btn-cont">
            <button className="btn my-5 abt-btn">
              View Resume <i className="fa-regular fa-file ms-1"></i>
            </button>
          </div>
          </Link>
      <section>
        <Contact />
      </section>
    </>
  )
}

export default About