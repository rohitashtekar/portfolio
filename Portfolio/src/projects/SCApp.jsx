import '../styles/projects/sca.css';

const SCApp = () => {
    return (
        <>
            <section className="container-fluid project-detail-cont">
                <div className="project-details">
                    <p>
                        I developed the front-end for a React-based web application designed to improve access to healthcare by enabling users to connect with specialized doctors for second opinions. The platform eliminates the need for in-person visits by allowing users to choose a medical specialist and make a secure payment to initiate an online consultation.
                    </p>
                    <p>
                        Core Features
                        Doctor Selection by Specialty:
                        Users can browse and select doctors based on their area of expertise, such as cardiology, dermatology, neurology, and more. This ensures that users receive tailored medical guidance relevant to their condition.
                    </p>
                    <p>
                        Secure Online Consultation Access:
                        Once a doctor is selected, users can make a payment to gain access to consultation services. The system is designed to be intuitive, offering a streamlined workflow from specialist selection to payment completion.
                    </p>
                    <p>
                        Responsive User Interface:
                        The front-end is built with React.js, offering a dynamic and responsive interface that works smoothly across all device types—smartphones, tablets, and desktops. Styling is handled with HTML, CSS, and Bootstrap, with attention given to accessibility, user experience, and visual design.
                    </p>
                    <p>
                        The back-end is built using Node.js, which primarily handles:
                    </p>
                    <p>
                        Fetching Doctor Data:
                        The server retrieves information about available doctors, including their specialization, credentials, and availability.
                    </p>
                    <p>
                        Admin Management Tools:
                        An administrative panel allows the admin to add, update, or remove doctors from the platform, keeping the system current and reliable.
                    </p>
                    <p>
                        Simplified Architecture:
                        The system is intentionally lightweight, prioritizing ease of use, performance, and security. Node.js powers the server-side logic, while MySQL is used for storing doctor data and user interactions.
                    </p>
                    <hr />
                    <p>
                        Technology Stack 
                    </p>
                    <p>
                        Frontend: React.js, HTML, CSS, Bootstrap <br />
                        Backend: Node.js <br />
                        Database: MySQL <br />
                        Tools: Stripe (payment gateway)
                    </p>
                    <p>
                        Outcome: <br />
                        This project allowed me to gain hands-on experience in full-stack web development, particularly in building real-world healthcare platforms that focus on accessibility, specialization, and usability. It also deepened my understanding of designing scalable and secure web applications while balancing simplicity with professional utility.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SCApp