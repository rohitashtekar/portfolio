import '../styles/pages/terms.css';

const Terms = () => {
  return (
    <>
      <div className="terms-container container-fluid">

        <h3 className="terms-title">Terms & Conditions</h3>
        <span className="terms-date">Last Updated: 10-11-2025</span>

        <h5>
          Welcome to my Personal Portfolio, operated by Mr.Rohit Ashtekar.
          <div className="divider"></div>
          By accessing or using this Website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please do not use this Website.
        </h5>

        <hr />
        <div className="terms-card">
          <h5 className="terms-head">
            1. Ownership and Copyright
          </h5>
          <p className="terms-desc">
            All content on this Website, including but not limited to text, images, graphics, code, design elements, logos, and other materials, are the intellectual property of Rohit Ashtekar, unless otherwise stated.

            All rights are reserved.
            Reproduction, distribution, modification, republication, or commercial use of any material from this Website is strictly prohibited without prior written permission.

            Any unauthorized use may violate copyright, trademark, and other applicable laws under the Copyright Act, 1957 (India) and international treaties.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            2. Permitted Use
          </h5>
          <p className="terms-desc">
            You may view and interact with the Website for personal, non-commercial purposes only.
            You may not:

            Copy, reproduce, or redistribute any part of the Website or its content.

            Use the Website or its content for commercial or promotional purposes without permission.

            Use automated tools (bots, crawlers, or scrapers) to extract data or content.

            Remove any copyright or proprietary notices.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            3. Content Accuracy and Updates
          </h5>
          <p className="terms-desc">
            I make reasonable efforts to ensure that the information presented on this Website is accurate and up-to-date. However, I do not guarantee that all information is free of errors or omissions.
            I reserve the right to modify, update, or remove content at any time without prior notice.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            4. External Links
          </h5>
          <p className="terms-desc">
            This Website may contain links to third-party websites. These links are provided for convenience only. I do not endorse or take responsibility for the content, privacy policies, or practices of any third-party sites.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            5. Limitation of Liability
          </h5>
          <p className="terms-desc">
            To the maximum extent permitted by applicable law, I shall not be held liable for any direct, indirect, incidental, or consequential damages arising out of your access to or use of this Website.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            6. Privacy
          </h5>
          <p className="terms-desc">
            Any personal information you may provide (e.g., through contact forms) will be handled in accordance with my Privacy Policy
            (if applicable).
            I am committed to protecting your data and privacy as per applicable Indian data protection laws.
          </p>

        </div>
        <div className="terms-card">
          <h5 className="terms-head">
            7. Changes to These Terms
          </h5>
          <p className="terms-desc">
            I may revise these Terms and Conditions from time to time. The updated version will always be posted on this page with a new “Last Updated” date.
            By continuing to use the Website, you agree to be bound by the updated Terms.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            8. Governing Law and Jurisdiction
          </h5>
          <p className="terms-desc">
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes arising out of or relating to these Terms or the use of this Website shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
          </p>
        </div>

        <div className="terms-card">
          <h5 className="terms-head">
            9. Contact
          </h5>
          <p className="terms-desc">
            If you have any questions or requests regarding these Terms, please contact:
            📧 <a href="mailto:rrashtekar@gmail.com">rrashtekar@gmail.com</a>
          </p>
        </div>

      </div>
    </>
  )
}

export default Terms