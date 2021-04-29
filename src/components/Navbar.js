import { Link } from "react-router-dom";
import "../css/navbar.css"



const Navbar = () => {
    return (
        <nav className="navbar mt-5">
            <h4 className="primary-color">Note app</h4>
            <ul className="nav__content">
                <Link className="nav__link mr-3" to ="/">HOME</Link>
                <Link className="nav__link" to ="/addNote">New Note</Link>
            </ul>

        </nav>
    )
}

export default Navbar;