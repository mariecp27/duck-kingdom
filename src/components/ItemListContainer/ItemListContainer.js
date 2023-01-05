import { useEffect, useState } from "react";
import { requestData } from "../../helpers/requestData";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        requestData()
            .then( (res) => {
                setProducts(res);
            })
            .catch( (err) => {
                console.log(err);
            });
    }, [products]);

    return (
        <div className="item-list-container">
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;