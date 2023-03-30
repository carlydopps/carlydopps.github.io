import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./components/about/AboutPage"
import { Goals } from "./components/goals/Goals"
import { Home } from "./components/home/Home"
import { NavBar } from "./components/nav/NavBar"
import { ProjectList } from "./components/projects/ProjectList"
import './components/style.css'
import { Tech } from "./components/tech/tech"

export const Website = () => {
  return <>
    <NavBar />
    <Home />
    <ProjectList />
    <AboutPage />
    <Tech />
    <Goals />
  </>
}
