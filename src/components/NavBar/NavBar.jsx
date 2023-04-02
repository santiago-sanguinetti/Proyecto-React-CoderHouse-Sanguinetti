import "./NavBarStyles.css";
const Navbar = () => {
    return (
        <header>
            <h3>Logo</h3>
            <nav className="navbar">
                <li className="navbar-menu">
                    <a href="/#">Inicio</a>
                </li>
                <li className="navbar-menu">
                    <a href="/#">Acerca de</a>
                </li>
                <li className="navbar-menu">
                    <a href="/#">Contacto</a>
                </li>
            </nav>
        </header>
    );
};

export default Navbar;
