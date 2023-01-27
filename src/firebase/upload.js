import data from  "../data/products.json" assert {type: "json"};
import { db } from "./config.js";
import { collection, addDoc } from "firebase/firestore";

data.forEach(product => delete product.id);

const productsRef = collection(db, "duck-kingdom-products");

data.forEach(product =>  {
    addDoc(productsRef, product);
})