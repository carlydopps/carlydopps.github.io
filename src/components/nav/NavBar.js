import { Outlet, useNavigate } from "react-router-dom"

export const NavBar = () => {

    const navigate = useNavigate()

    return <>
        <section className="navbar">
            <button onClick={() => navigate("/")} className="navbar-btn">Home</button>
            <button onClick={() => navigate("/about")} className="navbar-btn">About</button>
            <button onClick={() => navigate("/projects")} className="navbar-btn">Projects</button>
            <button onClick={() => navigate("/tech")} className="navbar-btn">Tech</button>
        </section>
        <Outlet/>
    </>
}