import React from "react";

function CartItem(props) {
    const { id, name, price, quantity } = props;

    return (
        <div>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
}

export default CartItem;
