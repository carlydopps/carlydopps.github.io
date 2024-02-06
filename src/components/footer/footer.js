import { icons, pages, contacts } from "../../utils/constants"

export const Footer = () => {
    const scrollTo = (e, page) => {
        e.preventDefault()
        const element = document.getElementById(page)
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return <div className='footer'>
        <ul className='footer-pages'>
            {pages.map(page => <li key={page} onClick={(e) => scrollTo(e, page)}>{page}</li>)}
        </ul>
        <div className='footer-icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')} key={contact}>
                    {icons[contact]}
                </button>)
            }
        </div>
    </div>
}