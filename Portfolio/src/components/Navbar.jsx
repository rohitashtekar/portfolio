import { Link } from "react-router-dom";
import '../styles/components/navbar.css'
import brandLight from '../assets/brand-light.webp';
import brandDark from '../assets/brand-dark.webp';

const Navbar = ({ isDark, setIsDark }) => {

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="logo-link">
                        <img className="nav-logo" src={ isDark? brandLight: brandDark } alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/projects">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/skills">SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li>
                            </li>
                        </ul>
                        <div className="disp-mode" onClick={ toggleTheme }>
                            <i className="fa-solid fa-circle-half-stroke"></i>
                        </div>
                    </div>
                    {/* <div className="d-flex ms-3" role="email">
                        <button className="btn btn-outline-light" type="submit">rrashtekar@gmail.com</button>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar