import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ItemsOutOfStock( { itemsOutOfStock } ) {
    return (
        <div className="items-out-of-stock">
            <p>
                <strong><FontAwesomeIcon icon={faWarning}/> ¡Oh!, parece que algunos de los patitos se han agotado:</strong>
            </p>
            <hr className="items-out-of-stock__hr"/>
            <div className="items-out-of-stock__products">
                <article>
                <p className="m-0">Patito</p>
                <p className="m-0">Disponibles</p>
                </article>
                {
                    itemsOutOfStock.map(product => (
                        <article key={product.id}>
                            <h3 className="productName m-0">{product.name}</h3>
                            <p className="m-0">{product.stock}</p>
                        </article>
                    ))
                }
            </div>
            <hr className="items-out-of-stock__hr"/>
            <p>Actualiza tu carrito para continuar</p>
            <Link to={"/cart"}>Ir al carrito <FontAwesomeIcon icon={faCartShopping}/></Link>
        </div>
    )
}

export default ItemsOutOfStock;