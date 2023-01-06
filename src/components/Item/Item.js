import { formatterPeso } from "../../helpers/formatterPeso";

function Item( { image, name, source, price } ) {

    return (
        <article className="item col-7 col-sm-5 col-md-3">
            <img src = {image} alt = {name}/>
            <h3>{name}</h3>
            <h4>{source}</h4>
            <strong>{formatterPeso(price)}</strong>
            <button>Detalle</button>
        </article>    
    )
}

export default Item;