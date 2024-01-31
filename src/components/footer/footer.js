import { icons, pages, contacts } from "../../utils/constants"

export const Footer = () => {
    const scrollTo = (e, page) => {
        e.preventDefault()
        console.log(e)
        const element = document.getElementById(page)
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return <div class='footer'>
        <ul class='footer-pages'>
            {pages.map(page => <li onClick={(e) => scrollTo(e, page)}>{page}</li>)}
        </ul>
        <div class='footer-icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')}>
                    {icons[contact]}
                </button>)
            }
        </div>
    </div>
}