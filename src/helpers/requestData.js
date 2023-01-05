import allProducts from "../data/products.json";

export const requestData = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(allProducts);
        }, 2000);
    });
}