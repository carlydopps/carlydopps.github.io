import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./components/about/AboutPage"
import { Goals } from "./components/goals/Goals"
import { Home } from "./components/home/Home"
import { NavBar } from "./components/nav/NavBar"
import { Project } from "./components/projects/Project"
import { ProjectList } from "./components/projects/ProjectList"
import './components/style.css'
import { Tech } from "./components/tech/tech"

export const Website = () => {
  return <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="projects" element={<ProjectList />}/>
        <Route path="projects/:projectId" element={<Project />}/>
        <Route path="tech" element={<Tech />}/>
        <Route path="goals" element={<Goals />}/>
    </Routes>
  </>
}
