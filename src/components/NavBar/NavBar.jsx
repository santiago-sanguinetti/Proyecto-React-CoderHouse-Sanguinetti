import "./NavBarStyles.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="Logo">
                    <h3>Horizon</h3>
                </Link>

                <div className="Categories">
                    <NavLink
                        to={`/category/gpu`}
                        className={({ isActive }) =>
                            isActive ? "ActiveOption" : "Option"
                        }
                    >
                        Tarjetas de video
                    </NavLink>
                    <NavLink
                        to={`/category/cpu`}
                        className={({ isActive }) =>
                            isActive ? "ActiveOption" : "Option"
                        }
                    >
                        Procesadores
                    </NavLink>
                    <NavLink
                        to={`/category/motherboard`}
                        className={({ isActive }) =>
                            isActive ? "ActiveOption" : "Option"
                        }
                    >
                        Placas madre
                    </NavLink>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;
