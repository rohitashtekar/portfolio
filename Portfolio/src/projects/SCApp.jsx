import '../styles/projects/sca.css';

const SCApp = () => {
    return (
        <>
            <section className="container-fluid project-detail-cont">
                <div className="project-details">
                    <p>
                        I developed The SecondClinic, a comprehensive React-based web application designed to provide users with the opportunity to upload their medical reports and receive second opinions from specialized doctors across various medical fields. The core objective of this platform is to enhance access to healthcare by allowing users to consult with top-tier doctors for a second perspective on their medical diagnoses, without the need to physically visit a clinic.
                    </p>
                    <p>
                        The SecondClinic allows users to choose doctors based on their area of expertise, such as cardiology, dermatology, neurology, or other specialized fields. This feature enables users to receive tailored advice and insights from experts with the most relevant experience for their medical concerns. The application’s workflow is designed to be intuitive: users can upload their medical reports in various formats, such as images or PDFs, and then select a doctor from a list of available specialists.
                    </p>
                    <p>
                        For the front-end development, I used React.js to build a dynamic and responsive interface that ensures a seamless user experience. The app provides an easy-to-navigate layout where users can quickly upload their reports, choose their preferred specialist, and communicate with the doctor through a chat or consultation feature. The UI is styled using HTML and CSS, with special attention to accessibility, visual appeal, and usability. I focused on creating a responsive design to ensure optimal performance across a wide range of devices, including smartphones, tablets, and desktops.
                    </p>
                    <p>
                        On the back-end, the application is powered by Node.js, which ensures fast and efficient processing of user requests, such as report uploads, doctor selection, and consultation scheduling. The Node.js server is responsible for handling file uploads, user authentication, and maintaining communication with the database. The application’s MySQL database is used for securely storing and managing user data, medical reports, doctor profiles, and consultations. By using MySQL, I ensured that sensitive information is securely stored and easily retrievable, following best practices for data security and privacy.
                    </p>
                    <p>
                        One of the main challenges was ensuring that the system could handle large medical files efficiently, such as high-resolution images of medical scans, and still provide users with a smooth and quick experience. To address this, I optimized the file-uploading process and implemented robust error handling for all forms of data input.
                    </p>
                    <p>
                        The platform also includes user authentication and account management features, allowing users to create profiles, track their medical reports and consultations, and receive notifications about new feedback from their chosen doctors. To make the app as user-friendly as possible, I included a real-time communication system where users can directly interact with their chosen doctors through secure messaging, offering timely and professional feedback.
                    </p>
                    <p>
                        Overall, this project gave me invaluable experience in building a full-stack web application, integrating front-end technologies with back-end frameworks, and working with medical data management. It also strengthened my knowledge in developing applications that require high performance, security, and scalability while prioritizing user privacy.
                    </p>
                    <hr />
                    <p>Technology Stack: React, Node.js, MySQL, HTML, CSS, Bootstrap.</p>
                </div>
            </section>
        </>
    )
}

export default SCApp