import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import NoProducts from "../NoProducts/NoProducts";

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemName, categoryId } = useParams();

    /*
    useEffect( () => {
        setProducts([]);
        setLoading(true);
        requestAllProducts()
            .then( (res) => {
                if (itemName) {
                    let name = itemName.toLowerCase();
                    setProducts(res.filter( product => product.name.toLowerCase().includes(name)));
                } else if (categoryId) {
                    setProducts(res.filter( product => product.category === categoryId ));
                } else {
                    setProducts(res);
                }
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });
    }, [itemName, categoryId]);
    */

    useEffect( () => {
        setProducts([]);
        setLoading(true);

        const productsRef = collection(db, "duck-kingdom-products");

        let myQuery = "";

        if (itemName) {
            const name = itemName.toLocaleLowerCase();
            myQuery = query(productsRef, orderBy("name", "asc"), where("name", ">=", name), where("name", "<=", name + "\uf8ff"));
        } else if (categoryId) {
            myQuery = query(productsRef, orderBy("name", "asc"), where("category", "==", categoryId));
        } else {
            myQuery = query(productsRef, orderBy("name", "asc"));
        }

        getDocs(myQuery)
            .then( (res) => {
                setProducts(res.docs.map( doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }));
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });
    }, [itemName, categoryId]);

    return (
        <div>
            {
                loading
                    ? <Spinner />
                    : products.length === 0
                        ? <NoProducts />
                        : <ItemList products={products} />
            }
        </div>
    );
}

export default ItemListContainer;