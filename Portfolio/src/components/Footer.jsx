import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-white pt-2">
            <div className="container-fluid d-sm-flex justify-content-between footer-container">
                <span>© Rohit Ashtekar</span>
                <div className="d-flex justify-content-center  terms-policy">
                    
                    <Link className="terms" to="/terms">
                    <p className="mx-3">Terms of Use</p>
                    </Link>
                    
                    <span className="mx-3">Cookie Policy</span>
                    <span className="mx-3">Privacy Policy</span>  
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer