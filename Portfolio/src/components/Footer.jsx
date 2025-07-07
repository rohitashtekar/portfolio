import '../styles/components/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="ft-container">
        <div className="ft-part-1 container-fluid">
          <h6 className="say-hello">
            Say Hello
          </h6>
          <div className="footer-menu">
            <div className="ft-contact">
              <li><a href="mailto:rrashtekar@gmail.com">rrashtekar@gmail.com</a></li>
              <li><a href="https://wa.me/919482159328">wa.me/rohit.ashtekar</a></li>
            </div>
            <div className="footer-menu-list">
              <Link to="/projects"><li>My Projects</li></Link>
              <Link to="/skills"><li>My Skills</li></Link>
              <Link to="/about"><li>About</li></Link>
            </div>
          </div>
        </div>
        <div className="ft-part-2">
          <hr />
          <div className="ft-lower">
            <div>
              <span>© Rohit Ashtekar 2025</span>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/rohit-ashtekar-140536125" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/rohitashtekar" target="_blank"> <i className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/roh1t.ashtekar/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.youtube.com/@kingindenorth" target="_blank"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer