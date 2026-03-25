import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/resume.css';
import RAres from '../assets/RAD.pdf';

const Resume = () => {
    const navigate = useNavigate();

    const navigatePageBack = () => {
        navigate(-1);
    }

    return (
        <>
            <section className="res-section container-fluid">
                <div className="resume">
                    <div className="res-left">
                        <div className="box">
                            <button className="btn box-btn" onClick={navigatePageBack}><i className="fa-solid fa-backward"></i> BACK </button>
                            <a className="btn box-btn" href={RAres} target="_blank" download><i className="fa-solid fa-download"> DOWNLOAD </i></a>
                            <Link className="box-btn" to="https://www.linkedin.com/in/rohit-ashtekar-140536125" target="_blank"><i className="fa-brands fa-linkedin fa-2xl text-dark"></i></Link>
                        </div>
                        <div className="left-inner">
                            <div className="left-p lp1">
                                <h5>Contact</h5>
                                <h6>E-mail: rrashtekar@gmail.com</h6>
                                <h6>Hometown: Belgaum, India</h6>
                            </div>
                            <div className="left-p lp2">
                                <h5>Education</h5>
                                <h6 className="mt-3">Bachelor of Engineering
                                    (B.E.) in Information Science
                                    & Engineering</h6>
                                <span>
                                    KLS Gogte Institute of Technology, Belgaum
                                </span>

                            </div>
                            <div className="left-p lp3">
                                <h5>Skills</h5>
                                <h6 className="mt-3">UI/UX & Front-End:</h6>
                                <span>
                                    React.js
                                    (Vite), React Router, React Hooks, HTML5,
                                    CSS3, Bootstrap, Responsive
                                    Design
                                </span>
                                <h6>Languages:</h6>
                                <span>
                                    JavaScript, C/C++, Python (Basics)

                                </span>
                                <h6>Back-End:</h6>
                                <span>
                                    Node.js, REST
                                    APIs, Express.js
                                </span>
                                <h6>Tools & Platforms:</h6>
                                <span>
                                    VS Code,
                                    GitHub, Postman, Jira,
                                    Confluence
                                </span>
                                <h6>Database: </h6>
                                <span>
                                    MongoDB, MySQL
                                </span>
                                <h6>Testing:</h6>
                                <span>
                                    Cypress.js, Basic familiarity with
                                    JEST
                                </span>
                                <h6>Artificial Intelligence:</h6>
                                <span>
                                    Prompt Engineering,Generative AI & LLMs - ChatGPT, Claude.ai, MS CoPilot
                                </span>
                            </div>
                            <div className="left-p lp4">
                                <h5>Languages</h5>
                                <h6 className="mt-3">English</h6>
                                <h6>Hindi</h6>
                                <h6>Marathi</h6>
                            </div>
                        </div>
                    </div>
                    <div className="res-right">
                        <div className="res-header">
                            <h1>ROHIT ASHTEKAR</h1>
                        </div>
                        <div className="res-subheader">
                            <h4>Software Developer</h4>
                        </div>
                        <article className="right-inner">
                            <div className="work-exp">
                                <h5>Work Experience</h5>
                                <div className="we-comp mt-0">
                                    <h6>Gigasolv Consulting</h6>
                                    <p>Software Engineer <br /></p>
                                    <span>March 2024 – June 2024</span>
                                    <ul>
                                        <li>
                                            Developed and optimized React.js components for a customer-facing web application, improving user engagement.
                                        </li>
                                        <li>
                                            Debugged and resolved production issues, increasing application stability and reducing user complaints.
                                        </li>
                                        <li>
                                            Collaborated with UI/UX designers to enhance interfaces, resulting in a 5% increase in conversion rates.
                                        </li>
                                        <li>
                                            Implemented structured error handling and debugging practices to reduce post-deployment issues.
                                        </li>
                                    </ul>
                                </div>
                                <div className="we-comp">
                                    <h6>UIPEP Technologies Pvt. Ltd.</h6>
                                    <p>MERN/MEAN Stack Developer <br /></p>
                                    <span>October 2021 – February 2024</span>
                                    <ul>
                                        <li>
                                            Built and maintained interactive frontend features such as infinite scroll, image carousels, ad units, and dynamic
                                            pages using JavaScript, HTML, and CSS - resulting in smoother user interactions across multiple client websites.
                                        </li>
                                        <li>
                                            Improved page load times and performance by optimizing UI components and fixing rendering issues.
.
                                        </li>
                                        <li>
                                            Integrated Google Analytics and Amplitude for real-time event tracking and user behavior analysis.
                                        </li>
                                        <li>
                                            Implemented Securiti.ai for cookie consent and GDPR - enhancing user experience and compliance.
                                        </li>
                                        <li>
                                            Collaborated with product managers, UI/UX designers, and QA engineers in an Agile/Scrum environment using Jira, ensuring timely delivery of quality features.
                                        </li>
                                    </ul>
                                </div>
                                <div className="we-comp">
                                    <p>Intern – MERN/MEAN Stack Developer <br /></p>
                                    <span>April 2021 – September 2021</span>
                                    <ul>
                                        <li>
                                            Developed frontend UI components and backend APIs using Angular, Node.js, and Stripe API to support user credit management.
                                        </li>
                                        <li>
                                            Improved UI usability, increasing user engagement by 10%.
                                        </li>
                                        <li>
                                            Designed and integrated RESTful APIs to streamline data flow and enhance application performance.
                                        </li>
                                        <li>
                                            Utilized Git and Agile methodologies to ensure efficient development and timely feature delivery.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume