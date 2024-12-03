// using bootstrap for the navbar, making it a component so it can be used on other pages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <nav expand="lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={"/Sections"}>Web Development</Link></li>
                                <li><Link to={"/Sections"}>Unity Development</Link></li>
                                <li><Link to={"/Sections"}>DirectX11/12</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to={"/About"}>About</Link></li>
                        <li className="nav-item"><Link to={"/Contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}
