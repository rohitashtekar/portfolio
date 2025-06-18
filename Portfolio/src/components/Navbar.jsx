import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="container-fluid nb-container">
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid px-0">
                    <Link className="navbar-brand d-sm-flex" to="/">
                        <h1 className="nav-btxt">RA</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-inner justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link p-0 px-3" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link p-0 px-3" aria-current="page" to="/projects">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link p-0 px-3" aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link p-0 px-3" aria-current="page" to="/about">ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex" role="email">
                        <button className="btn btn-outline-light" type="submit">rrashtekar@gmail.com</button>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar