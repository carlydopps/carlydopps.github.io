import { useNavigate } from "react-router-dom"
import { icons, pages, contacts } from "../../utils/constants"

export const Footer = () => {
    const navigate = useNavigate()

    return <div class='footer'>
        <div class='footer-pages'>
            {
                pages.map(page => <a onClick={() => navigate(`/${page}`)} href={`#${page}`}>{page}</a>)
            }
        </div>
        <div class='footer-icons'>
            {
                Object.keys(contacts).map(contact => <button onClick={()=> window.open(contacts[contact].link, '_blank')}>
                    {icons[contact]}
                </button>)
            }
        </div>
    </div>
}