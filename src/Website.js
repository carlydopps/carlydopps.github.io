import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./about/AboutPage"
import { Home } from "./home/Home"
import { NavBar } from "./nav/NavBar"
import { Project } from "./projects/Project"
import { ProjectList } from "./projects/ProjectList"

export const Website = () => {
  return <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="projects" element={<ProjectList />}/>
        <Route path="projects/:projectId" element={<Project />}/>
    </Routes>
  </>
}
