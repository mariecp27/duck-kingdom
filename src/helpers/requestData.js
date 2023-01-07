import allProducts from "../data/products.json";

export const requestAllProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(allProducts);
        }, 2000);
    });
}

export const requestProductById = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const product = allProducts.find(product => product.id === id);

            if (product) {
                resolve(product);
            } else {
                reject({
                    error: '¡Oh!, no se encontró ese patito'
                })
            }
        }, 2000);
    });
}