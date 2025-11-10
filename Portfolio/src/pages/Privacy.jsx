import '../styles/pages/privacy.css';

const Privacy = () => {
    return (
        <>
            <div className="privacy-container container-fluid">

                <h3 className="terms-title">Privacy Policy</h3>
                <p className="terms-date">Last Updated: 10-11-2025</p>

                <div className="terms-card">
                    <h5 className="terms-head">1. Information I Collect</h5>
                    <p className="terms-desc">
                        When you use my Website or contact me through the contact form, I may collect the following information:
                        <br />– Personal Information: Your name, email address, and any other details you provide through the contact form.
                        <br />– Non-Personal Information: Browser type, device information, IP address, and general site usage (via analytics tools like Google Analytics, if enabled).
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">2. How I Use Your Information</h5>
                    <p className="terms-desc">
                        I may use the collected information to:
                        <br />– Respond to your queries or messages.
                        <br />– Improve the Website’s performance, design, and content.
                        <br />– Analyze site usage for better user experience.
                        <br />– Maintain security and prevent misuse.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">3. Data Security</h5>
                    <p className="terms-desc">
                        I take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. However, no online system is completely secure, and I cannot guarantee absolute data security.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">4. Sharing of Information</h5>
                    <p className="terms-desc">
                        I do not sell, rent, or trade your personal information. Information may be shared only:
                        <br />– To comply with legal obligations or governmental requests.
                        <br />– To protect my rights, property, or safety, or that of others.
                        <br />– With trusted service providers (like hosting or analytics tools) under confidentiality agreements.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">5. Cookies and Analytics</h5>
                    <p className="terms-desc">
                        This Website may use cookies or analytics tools (e.g., Google Analytics) to collect anonymous usage statistics. You can disable cookies in your browser settings, though some site features may not function properly as a result.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">6. Third-Party Links</h5>
                    <p className="terms-desc">
                        This Website may include links to external websites. I am not responsible for the privacy practices or content of those third-party sites. Please review their respective privacy policies.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">7. Your Rights</h5>
                    <p className="terms-desc">
                        If you are located in India, you have the right to:
                        <br />– Access the personal data I hold about you.
                        <br />– Request correction or deletion of your data.
                        <br />– Withdraw consent (where applicable).
                        <br /><br />
                        You can make such requests by contacting me directly at <a href="mailto:rrashtekar@gmail.com">rrashtekar@gmail.com</a>.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">8. Retention of Information</h5>
                    <p className="terms-desc">
                        I will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">9. Updates to This Policy</h5>
                    <p className="terms-desc">
                        I may update this Privacy Policy from time to time to reflect changes in legal requirements or my practices. The updated version will be posted on this page with a new “Last Updated” date. Continued use of the Website indicates your acceptance of these updates.
                    </p>
                </div>

                <div className="terms-card">
                    <h5 className="terms-head">10. Contact</h5>
                    <p className="terms-desc">
                        For questions, concerns, or requests regarding this Privacy Policy, please contact:
                        <br />📧 <a href="mailto:rrashtekar@gmail.com">rrashtekar@gmail.com</a>
                    </p>
                </div>

            </div>
        </>
    )
}

export default Privacy