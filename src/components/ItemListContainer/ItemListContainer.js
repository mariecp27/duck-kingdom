import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestAllProducts } from "../../helpers/requestData";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import NoProducts from "../NoProducts/NoProducts";

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemName, categoryId } = useParams();

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