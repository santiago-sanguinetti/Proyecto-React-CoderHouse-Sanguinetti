import "./ItemListStyles.css";
import Item from "../Item/Item";
import { getProducts } from "../../firebase/firebase";

const products = getProducts();
const ItemList = ({ products }) => {
    return (
        <div className="ListGroup">
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
