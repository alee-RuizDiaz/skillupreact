import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <header className="navbar bg-dark">
            <nav className="container">
                <ul className="menu mt-2 container">
                    <li className="me-3">
                        <Link className="font" to={'/'}>Inicio</Link>
                    </li>
                    <li className="mx-3">    
                        <Link className="font" to={'/listado'}>Listado</Link>
                    </li>
                    <li className="mx-3">
                        <Link className="font" to={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar