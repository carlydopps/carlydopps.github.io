import { Outlet, useNavigate } from "react-router-dom"

export const NavBar = () => {

    const navigate = useNavigate()

    return <nav id="navbar" className="navbar navbar-light fixed-top d-flex justify-content-end">
        <ul className="nav">
            <li onClick={() => navigate("/")} className="nav-item">
                <a class="nav-link text-decoration-none" href="#home">Home</a>
            </li>
            <li onClick={() => navigate("/about")} className="nav-item">
                <a class="nav-link text-decoration-none" href="#about">About</a>
            </li>
            <li onClick={() => navigate("/projects")} className="nav-item">
                <a class="nav-link text-decoration-none" href="#projects">Projects</a>
            </li>
            <li onClick={() => navigate("/tech")} className="nav-item">
                <a class="nav-link text-decoration-none" href="#tech">Tech</a>
            </li>
            <li onClick={() => navigate("/goals")} className="nav-item">
                <a class="nav-link text-decoration-none" href="#goals">Goals</a>
            </li>
        </ul>
    </nav>
}