import { useEffect, useState } from "react";
import { requestAllProducts } from "../../helpers/requestData";
import Spinner from "../Spinner/Spinner";
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
            {
                products.length === 0
                    ? <Spinner />
                    : <ItemList products={products} />
            }

        </div>
    );
}

export default ItemListContainer;