import { AboutPage } from "./about/AboutPage"
import { Goals } from "./goals/Goals"
import { Home } from "./home/Home"
import { ProjectList } from "./projects/ProjectList"
import { Tech } from "./tech/tech"

export const MainContainer = () => {
    return <main className="container">
        <Home />
        <ProjectList />
        <AboutPage />
        <Tech />
        <Goals />
    </main>
}