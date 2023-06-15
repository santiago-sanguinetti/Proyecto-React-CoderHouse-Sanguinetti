import React from "react";

function CartItem(props) {
    const { id, nombre, precio, quantity } = props;

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
}

export default CartItem;
