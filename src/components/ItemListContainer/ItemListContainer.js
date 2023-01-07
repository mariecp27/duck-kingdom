import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestAllProducts } from "../../helpers/requestData";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect( () => {
        setProducts([]);
        requestAllProducts()
            .then( (res) => {
                if (categoryId) {
                    setProducts(res.filter( product => product.category === categoryId ));
                } else {
                    setProducts(res);
                }
            })
            .catch( (err) => {
                console.log(err);
            });
    }, [categoryId]);

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