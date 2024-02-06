import { contacts, icons, pages } from '../../utils/constants'

export const NavBar = () => {
    const scrollTo = (e, page) => {
        e.preventDefault()
        const element = document.getElementById(page)
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    let scrollTarget
    let hideTarget
    window.onload = function() {
        const target = document.getElementById('header-img').getBoundingClientRect().bottom - document.getElementById('header-img').getBoundingClientRect().top
        hideTarget = target*0.8
        scrollTarget = target*0.75
    }

    window.onresize = function() {
        const target = document.getElementById('header-img').getBoundingClientRect().bottom - document.getElementById('header-img').getBoundingClientRect().top
        hideTarget = target*0.8
        scrollTarget = target*0.75
    }

    window.onscroll = function() {
        const navbar = document.getElementById('navbar')
        if (window.scrollY > scrollTarget) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }

        if (window.scrollY > hideTarget) {
            navbar.classList.add('hide')
        } else {
            navbar.classList.remove('hide')
        }  
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