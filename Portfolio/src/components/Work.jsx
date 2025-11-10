import { useForm, ValidationError } from '@formspree/react';
import '../styles/components/work.css'

const Work = () => {
    const [state, handleSubmit] = useForm("mgvpjreg");
    if (state.succeeded) {
        return <p className="formSuccess">Success! I will get back to you shortly.</p>;
    }
    return (
        <>
            {/* Work together */}
            <section className="container-fluid work-container">
                <div className="work-head">
                    <h1>Send me a message!</h1>
                    <p>
                        Got a question or proposal, or just want <br /> to say hello? Go ahead.
                    </p>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="form-row">
                        <div className="cfn form-input">
                            <label htmlFor="form-name">Name</label>
                            <input type="text" id="form-name" placeholder="Enter you full name" required={true} autoComplete="off"/>
                        </div>
                        <div className="cfe form-input">
                            <label htmlFor="form-email">Email</label>
                            <input type="email" id="form-email" name="email" placeholder="Enter your email address" required={true} style={{textTransform: "none"}}/>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                    </div>
                    <div className="cft form-input">
                        <label htmlFor="form-message">Message</label>
                        <input type="textarea" id="form-message" name="message" placeholder="Enter your message" required={true} autoComplete="off"/>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="btn-cont">
                        <button type="submit" disabled={state.submitting} className="btn my-3">Send <i className="bi bi-arrow-right ps-2"></i></button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Work