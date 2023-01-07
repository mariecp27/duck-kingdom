import { useEffect, useState } from "react";
import { requestAllProducts } from "../../helpers/requestData";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        requestAllProducts()
            .then( (res) => {
                setProducts(res);
            })
            .catch( (err) => {
                console.log(err);
            });
    }, [products]);

    return (
        <div>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;