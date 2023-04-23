const products = [
    {
        id: "1",
        name: "RTX 4070",
        price: 899.99,
        category: "gpu",
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/GeForce_RTX_407034.jpeg",
        stock: 3,
        description: "Descripción para RTX 4070",
    },
    {
        id: "2",
        name: "RX 6900 XT Gaming X Trio",
        price: 750,
        category: "gpu",
        img: "https://www.ozeros.com/wp-content/uploads/2021/01/MSI-Radeon-RX-6900-XT-portada-2.jpg",
        stock: 7,
        description: "Descripción para RX 6900 XT Gaming X Trio",
    },
    {
        id: "3",
        name: "GTX 1080 Ti",
        price: 399.99,
        category: "gpu",
        img: "https://www.gizcomputer.com/wp-content/uploads/2017/03/Gizcomputer-Nvidia-gtx-1080-ti-1024x600.jpg",
        stock: 1,
        description: "Descripción para GTX 1080 Ti",
    },
    {
        id: "4",
        name: "RYZEN 7 5800X3D",
        price: 350,
        category: "cpu",
        img: "https://www.notebookcheck.net/fileadmin/_processed_/3/7/csm_Ryzen_7_5800X3d_e5ce5ad13e.jpg",
        stock: 5,
        description: "Descripción para RYZEN 7 5800X3D",
    },
    {
        id: "5",
        name: "Asus ROG Strix B550-F",
        price: 299.99,
        category: "motherboard",
        img: "https://overcluster.com/wp-content/uploads/2022/07/Review-Asus-B550-Ryzen-5700-XT-Overcluster-Principal.jpg",
        stock: 5,
        description: "Descripción para Asus ROG Strix B550-F",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                products.filter((prod) => prod.category === productCategory)
            );
        }, 500);
    });
};
