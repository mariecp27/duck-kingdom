import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";

function ItemDetailContainer() {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect( () => {
        setProduct(null);
        setLoading(true);

        const productRef = doc(db, "duck-kingdom-products", itemId);

        getDoc(productRef)
            .then( (doc) => {
                setProduct({
                    ...doc.data(),
                    id: doc.id
                });
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });
    }, [itemId]);
    
    return (
        <div>      
            {
                loading
                    ? <Spinner />
                    : product.name
                        ? <ItemDetail {...product}/>
                        : <NotFound />
            }
        </div>
    )
}

export default ItemDetailContainer;