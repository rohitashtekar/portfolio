import '../styles/projects/chatbot.css';

const Chatbot = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="project-details">
          <p>
            I developed a Career Guidance Chatbot integrated into a dynamic, user-friendly website designed to assist students from diverse educational backgrounds in exploring potential career paths. The primary objective of this project was to create an accessible digital tool that could guide students in making informed career decisions through interactive and personalized conversations.
          </p>
          <p>
            The front-end of the website was developed using HTML, CSS, PHP, and basic JavaScript, with a strong emphasis on UI/UX design to ensure a clean, intuitive, and engaging user interface. My primary focus was on crafting an interactive and visually appealing front-end that could provide a seamless experience for users navigating the chatbot system. I designed responsive layouts, implemented interactive elements, and ensured cross-browser compatibility to enhance accessibility across different devices.
          </p>
          <p>
            Once users log in, they can initiate a conversation with the chatbot via a text-based chat window, which I designed and developed. This chat interface serves as the main interaction point between users and the backend system. The chatbot is powered by a Python backend using Flask, along with AIML (Artificial Intelligence Markup Language) to enable intelligent and context-aware responses. The use of AIML allowed us to structure and manage conversational logic efficiently, making the chatbot capable of understanding user queries related to career choices, educational requirements, and industry trends.
          </p>
          <p>
            To enhance user engagement and accessibility, I integrated Google Text-to-Speech (gTTS) API, which enables the chatbot to deliver voice responses in addition to text-based answers. This feature is particularly helpful for users who prefer auditory interaction or have difficulty reading text.
          </p>
          <p>
            Overall, my contributions focused on the complete front-end development, ensuring the system was not only functional but also aesthetically pleasing and user-friendly. I collaborated closely with backend developers to ensure smooth integration of the Python-based logic and API functionalities with the web interface. This project strengthened my skills in web development, user interface design, front-end and back-end integration, and gave me practical experience in working with AI-powered conversational systems.
          </p>
          <hr />
          <p>Technology Stack: HTML, CSS, JavaScript, PHP, Python, AIML, Flask, PyTorch.</p>
        </div>
      </section>
    </>
  )
}

export default Chatbot