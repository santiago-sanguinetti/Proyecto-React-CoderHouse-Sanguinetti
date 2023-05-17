import "./ItemDetailContainerStyles.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then((response) => {
                setProduct(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
