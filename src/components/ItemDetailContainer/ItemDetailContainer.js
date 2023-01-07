import { useEffect, useState } from "react";
import { requestProductById } from "../../helpers/requestData";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer( { productId } ) {

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect( () => {
        requestProductById(productId)
            .then( (res) => {
                setProduct(res);
                setError(null);
            })
            .catch( (err) => {
                setError(err.error);
            });
    }, [productId]);

    return (
        <div>
            {
                error
                    ? <h1>{error}</h1>
                    : product
                        ? <ItemDetail {...product} />
                        : <h1>Cargando...</h1>
            }
        </div>
    )
}

export default ItemDetailContainer;