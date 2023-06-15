import { Link } from "react-router-dom";
import cart from "./assets/shopping-cart.png";

const CartWidget = () => {
    return (
        <Link to="/cart" className="CartWidget">
            <img className="CartImg" src={cart} alt="cart-widget" />
        </Link>
    );
};

export default CartWidget;
