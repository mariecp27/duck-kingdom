import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestProductById } from "../../helpers/requestData";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

function ItemDetailContainer() {

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect( () => {
        requestProductById(Number(itemId))
            .then( (res) => {
                setProduct(res);
                setError(null);
            })
            .catch( (err) => {
                setError(err.error);
            });
    }, [itemId]);

    return (
        <div>
            {
                error
                    ? <h1>{error}</h1>
                    : product
                        ? <ItemDetail {...product} />
                        : <Spinner />
            }
        </div>
    )
}

export default ItemDetailContainer;