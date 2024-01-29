import { About } from './about/about'
import { Header } from './header/header'
import { Projects } from './projects/projects'
import { Tech } from './tech/tech'

export const Main = () => {
    return <div className='main'>
        <Header/>
        <Projects />
        <Tech />
        <About />
    </div>
}