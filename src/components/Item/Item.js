import { formatterPeso } from "../../helpers/formatterPeso";

function Item( { image, name, source, price } ) {

    return (
        <article>
            <img src = {image} alt = {name}/>
            <h3>{name}</h3>
            <p>{source}</p>
            <strong>{formatterPeso(price)}</strong>
            <button>Detalle</button>
        </article>    
    )
}

export default Item;