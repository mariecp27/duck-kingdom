import { formatterPeso } from "../../helpers/formatterPeso";
import ItemCount from "./ItemCount";

function ItemDetail( { image, name, source, description, price, height, material, stock } ) {

    return (
        <article className="item-detail">
            <img src = {image} alt = {name}/>
            <div className="item-detail__text-container">
                <div>
                    <h3>{name}</h3>
                    <em>{source}</em>
                </div>
                <div>
                    <p>{description}</p>
                    <p><strong>Altura: </strong>{height}</p>
                    <p><strong>Material: </strong>{material}</p>
                    <p><strong>Patitos disponibles: </strong>{stock}</p>
                    <strong className="item-detail__text-container-price">{formatterPeso(price)}</strong>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </article>    
    )
}

export default ItemDetail;