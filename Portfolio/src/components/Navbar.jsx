import { Link, useLocation, NavLink } from "react-router-dom";
import '../styles/components/navbar.css'
import brandLight from '../assets/brand-light.webp';
import brandDark from '../assets/brand-dark.webp';

const Navbar = ({ isDark, setIsDark }) => {
    const location = useLocation(); //gives current path

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    const onNavClick = () => {
        /* navbarToggler.classList.remove('show'); */

        // Collapse menu smoothly using Bootstrap's Collapse API
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse && window.bootstrap) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse)
                || new window.bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide(); // triggers Bootstrap’s smooth transition
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="logo-link">
                        <img className="nav-logo" src={isDark ? brandLight : brandDark} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-theme={isDark ? "dark" : "light"} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" onClick={onNavClick}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/projects" onClick={onNavClick}>PROJECTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/skills" onClick={onNavClick}>SKILLS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about" onClick={onNavClick}>ABOUT</NavLink>
                            </li>
                            <li>
                            </li>
                        </ul>
                        <div className="disp-mode" onClick={(e) => {
                            onNavClick(e);
                            toggleTheme();
                        }}>
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