import { useNavigate } from 'react-router-dom'
import { contacts, icons, pages } from '../../utils/constants'

export const NavBar = () => {
    const scrollTo = (e, page) => {
        e.preventDefault()
        console.log(e)
        const element = document.getElementById(page)
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return <div id='navbar' className='navbar'>
        <div class='navbar__links'>
            <p class='nav-link text-decoration-none home-title' href='#home'>Carly</p>
            <ul className='nav'>
                {pages.map(page => <li class='nav-link' onClick={(e) => scrollTo(e, page)}>{page}</li>)}
            </ul>
        </div>
        <div class='navbar__icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')}>
                    {icons[contact]}
                </button>)
            }
        </div>
    </div>
}