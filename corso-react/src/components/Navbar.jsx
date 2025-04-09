import './Navbar.css'
import Link from './Link'

function NavBar() {
    return (
        <ul>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Contatti</Link>
            </li>
            <li>
                <Link>Carriera</Link>
            </li>
            <li>
                <Link>Storia</Link>
            </li>
            <li>
                <Link>Contattaci</Link>
            </li>
        </ul>
    )
}

export default NavBar