import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/resume.css';
import RAres from '../assets/RAresume.pdf';

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
                            <button className="btn box-btn" onClick={ navigatePageBack }><i className="fa-solid fa-backward"></i> BACK </button>
                            <a className="btn box-btn" href={ RAres } target="_blank"><i className="fa-solid fa-download"> DOWNLOAD </i></a>
                            <Link className="box-btn" to="https://www.linkedin.com/in/rohit-ashtekar-140536125" target="_blank"><i className="fa-brands fa-linkedin fa-2xl text-dark"></i></Link>
                        </div>
                        <div className="left-inner">
                            <div className="left-p lp1">
                                <h5>Contact</h5>
                                <h6 className="mt-3">Phone: +91-9482159328</h6>
                                <h6>E-mail: rrashtekar@gmail.com</h6>
                                <h6>Town: Belgaum, India</h6>
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
                                    JavaScript, C/C++

                                </span>
                                <h6>Back-End:</h6>
                                <span>
                                    Node.js, REST
                                    APIs
                                </span>
                                <h6>Tools & Platforms:</h6>
                                <span>
                                    VS Code,
                                    GitHub, Postman, Jira,
                                    Confluence
                                </span>
                                <h6>Database: </h6>
                                <span>
                                    MySQL
                                </span>
                                <h6>Testing:</h6>
                                <span>
                                    Basic familiarity with
                                    JEST
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
                                            Developed and optimized React components for a customer-facing web app, improving user engagement.
                                        </li>
                                        <li>
                                            Identified and resolved bugs in existing React applications, enhancing stability and reducing user complaints.
                                        </li>
                                        <li>
                                            Collaborated with the UI/UX team to improve application interfaces, resulting in a 5% increase in conversion
                                            rates.
                                        </li>
                                        <li>
                                            Implemented comprehensive error handling and debugging procedures, minimizing post-deployment issue
                                        </li>
                                    </ul>
                                </div>
                                <div className="we-comp">
                                    <h6>UIPEP Technologies Pvt. Ltd.</h6>
                                    <p>MEAN Stack Developer <br /></p>
                                    <span>October 2021 – February 2024</span>
                                    <ul>
                                        <li>
                                            Developed key front-end features including infinite scroll, image carousel, ad units, and dynamic event pages using 
                                            JavaScript, HTML, and CSS — resulting in smoother user interactions across multiple client websites.
                                        </li>
                                        <li>
                                            Improved web performance and load times by resolving UI bugs and optimizing page components.
                                        </li>
                                        <li>
                                            Integrated third-party tools such as Amplitude and Google Analytics for real-time event tracking.
                                        </li>
                                        <li>
                                            Implemented Securiti.ai, a Cookie consent management platform, enhancing user experience and compliance
                                        </li>
                                        <li>
                                            Contributed in Agile/Scrum teams using Jira for sprint planning and task tracking.
                                        </li>
                                        <li>
                                            Collaborated with product owners, UI/UX designers, and QA engineers to deliver quality features on time.
                                        </li>
                                    </ul>
                                </div>
                                <div className="we-comp">
                                    <p>Intern – MEAN Stack Developer <br /></p>
                                    <span>April 2021 – September 2021</span>
                                    <ul>
                                        <li>
                                            Developed user credit management and payment gateway functionality using Angular, Stripe API, and Node.js.
                                        </li>
                                        <li>
                                            Collaborated with developers and UX/UI designers to optimize the user interface, leading to a 20% increase in
                                            user engagement.
                                        </li>
                                        <li>
                                            Built RESTful APIs to integrate with the website, improving application functionality and data flow.
                                        </li>
                                        <li>
                                            Worked with Git for version control and Agile methodologies for project management.
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