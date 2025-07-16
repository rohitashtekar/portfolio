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
                                    (Vite), React Router, HTML5,
                                    CSS3, Bootstrap, Responsive
                                    Design
                                </span>
                                <h6>Languages:</h6>
                                <span>
                                    JavaScript, C/C++

                                </span>
                                <h6>Back-End:</h6>
                                <span>
                                    Node.js, Nest.js, REST
                                    APIs
                                </span>
                                <h6>Tools & Platforms:</h6>
                                <span>
                                    VS Code,
                                    GitHub, Postman, Jira,
                                    Confluence
                                </span>
                                <h6>Cloud & Databases: </h6>
                                <span>
                                    AWS (S3),
                                    Azure, MySQL
                                </span>
                                <h6>Testing:</h6>
                                <span>
                                    Basic familiarity with
                                    JEST
                                </span>
                                <h6>Soft Skills:</h6>
                                <span>
                                    Team collaboration,
                                    Attention to detail, Design-thinking mindset

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
                                            Managed multiple project timelines efficiently, ensuring high-quality deliverables within tight deadlines
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
                                            Built websites that were cross-browser compatible and met accessibility standards, resulting in faster load
                                            time. Worked in an Agile environment using Jira, ensuring efficient sprint cycles and feature delivery
                                        </li>
                                        <li>
                                            Utilized JavaScript to integrate third-party tools (Amplitude, Google analytics) for event tracking and analytics.
                                        </li>
                                        <li>
                                            Implemented Securiti.ai, a Cookie consent management platform, enhancing user experience and compliance
                                        </li>
                                        <li>
                                            Collaborated with designers, product owners, and QA testers throughout the development process.
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