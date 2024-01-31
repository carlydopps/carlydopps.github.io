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
        <div className='navbar__links'>
            <p className='nav-link text-decoration-none home-title' href='#home'>Carly</p>
            <ul className='nav'>
                {pages.map(page => <li className='nav-link' key={page} onClick={(e) => scrollTo(e, page)}>{page}</li>)}
            </ul>
        </div>
        <div className='navbar__icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')} key={contact}>
                    {icons[contact]}
                </button>)
            }
        </div>
    </div>
}