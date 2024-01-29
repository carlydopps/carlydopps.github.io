import { useNavigate } from 'react-router-dom'
import { contacts, icons } from '../../utils/constants'

export const NavBar = () => {
    const navigate = useNavigate()

    return <div id='navbar' className='navbar'>
        <div class='navbar__icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')}>
                    {icons[contact]}
                </button>)
            }
        </div>
        <div class='navbar__links'>
            <p class='nav-link text-decoration-none home-title' href='#home'>Carly</p>
            <ul className='nav'>
                <li onClick={() => navigate('/projects')}>
                    <a class='nav-link text-decoration-none' href='#projects'>Projects</a>
                </li>
                <li onClick={() => navigate('/tech')}>
                    <a class='nav-link text-decoration-none' href='#tech'>Tech</a>
                </li>
                <li onClick={() => navigate('/about')}>
                    <a class='nav-link text-decoration-none' href='#about'>About</a>
                </li>
                <li onClick={() => navigate('/home')}>
                    <a class='nav-link text-decoration-none' href='#home'>Home</a>
                </li>
            </ul>
        </div>
    </div>
}