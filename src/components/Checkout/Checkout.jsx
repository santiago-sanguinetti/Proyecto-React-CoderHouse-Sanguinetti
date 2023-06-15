import {
    writeBatch,
    collection,
    getDocs,
    query,
    where,
    documentId,
    addDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp } from "firebase/firestore";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");

    const { cart, calculateTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        try {
            const total = calculateTotal();
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map((prod) => prod.id);

            const productsRef = collection(db, "productos");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "ordenes");
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error(
                    "Los siguientes productos están fuera de stock:",
                    outOfStock
                );
            }
        } catch (error) {
            console.error("Error en el checkout", error);
        }
    };

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
