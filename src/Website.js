import { NavBar } from './components/nav/navBar'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'
import '../src/style/index.scss';

export const Website = () => {
  return <>
    <NavBar/>
    <Main/>
    <Footer/>
  </>
}
