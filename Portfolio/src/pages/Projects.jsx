import { Link } from 'react-router-dom';
import '../styles/pages/projects.css';
import chatbot from '../assets/chatbot.jpg';
import coffee from '../assets/coffee.jpg';
import doctor from '../assets/doctor.jpg';
import Contact from '../components/Contact';

const Projects = () => {

  return (
    <>
      <section className="container-fluid mb-5">
        <div>
          <h3 className="header">PAST PROJECTS</h3>
        </div>
        <div className="project-list container-fluid">

          <Link to="/projects/secondclinic">
            <div className="container-fluid project-card">
              <div className="project-img">
                <img src={doctor} alt="" />
              </div>
              <h6>Healthcare Web App</h6>
              {/* <span>March 2025 - May 2025</span> */}
            </div>
          </Link>

          <Link to="/projects/chatbot">
            <div className="container-fluid project-card">
              <div className="project-img">
                <img src={chatbot} alt="Chatbot" />
              </div>
              <h6>Career Guidance Chatbot</h6>
              {/* <span>September 2019 - October 2020</span> */}
            </div>
          </Link>

          <Link to="/projects/coffeeorder">
            <div className="container-fluid project-card">
              <div className="project-img">
                <img src={coffee} alt="Coffee Order Application" />
              </div>
              <h6>Coffee Order Mobile App </h6>
              {/* <span>February 2019 - April 2019</span> */}
            </div>
          </Link>

        </div>
        <hr />
        <Contact />
      </section>
    </>
  )
}

export default Projects