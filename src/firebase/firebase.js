// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    addDoc,
    getDoc,
    getDocs,
    collection,
    doc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "sanguinetti-react-coderhouse.firebaseapp.com",
    projectId: "sanguinetti-react-coderhouse",
    storageBucket: "sanguinetti-react-coderhouse.appspot.com",
    messagingSenderId: "660683994851",
    appId: "1:660683994851:web:a029c69805e231228fb7d6",
    measurementId: "G-WNH7MXLVY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createProducts = async () => {
    const promise = await fetch("../../json/productos.json");
    const productos = await promise.json();
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.name,
            precio: prod.price,
            categoria: prod.category,
            img: prod.img,
            stock: prod.stock,
            descripcion: prod.description,
        });
    });
};

export const getProducts = async () => {
    const products = await getDocs(collection(db, "productos"));
    const items = products.docs.map((prod) => {
        return {
            ...prod.data(),
            id: prod.id,
        };
    });
    return items;
};

export const getProduct = async (id) => {
    const prod = await getDoc(doc(db, "productos", id));
    const item = { ...prod.data(), id: prod.id };
    return item;
};

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            getProducts().then((result) => {
                console.log(result);
                const filteredProducts = result.filter(
                    (prod) => prod.categoria === productCategory
                );
                resolve(filteredProducts);
            });
        });
    });
};

export { db };
