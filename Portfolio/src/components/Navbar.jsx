import { Link } from "react-router-dom";
import '../styles/components/navbar.css'
import brandLight from '../assets/brand-light.png';
import brandDark from '../assets/brand-dark.png';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="light">
                <div className="container-fluid px-0">
                    <Link to="/">
                        <img className="nav-logo" src={ brandLight } alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
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
                        </ul>
                    </div>
                    <div className="disp-mode ms-3">
                        <svg width="24px" height="24px" viewBox="2 2 22 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>{"Change Theme"}</title>
                            <g id="\uD83D\uDD0D-Product-Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" >
                                <g id="ic_fluent_dark_theme_24_regular" fill="white" fillRule="nonzero">
                                    <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="\uD83C\uDFA8-Color" />
                                </g>
                            </g>
                        </svg>
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