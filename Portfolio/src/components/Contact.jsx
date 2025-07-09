import '../styles/components/contact.css';

const Contact = () => {
    return (
        <>
            {/* Contact form */}
            <section className="form-container container-fluid">
                <div className="contact-head">
                    <h1>Send me a <br/> message!</h1>
                    <span>
                        Got a question or proposal, or just want<br/> to say hello? Go ahead.
                    </span>
                </div>
                <form>
                    <div className="form-row">
                        <div className="cfn form-input">
                            <label htmlFor="form-name">Name</label>
                            <input type="text" id="form-name" placeholder="Enter you full name" required={true} />
                        </div>
                        <div className="cfe form-input">
                            <label htmlFor="form-email">Email</label>
                            <input type="email" id="form-email" placeholder="Enter your email address" required={true} />
                        </div>
                    </div>
                    <div className="cft form-input">
                        <label htmlFor="form-ta">Message</label>
                        <textarea type="textarea" id="form-ta" placeholder="Enter your message" required={true}/>
                    </div>
                    <div className="btn-cont">
                        <button type="submit" className="btn my-3">Submit <i className="bi bi-arrow-right ps-2"></i></button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact