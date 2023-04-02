import "./NavBarStyles.css";
import CartWidget from "./CartWidget/CartWidget";
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <h3>Horizon</h3>
                <li className="navbar-menu">
                    <a href="/#">Inicio</a>
                </li>
                <li className="navbar-menu">
                    <a href="/#">Acerca de</a>
                </li>
                <li className="navbar-menu">
                    <a href="/#">Contacto</a>
                </li>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;
