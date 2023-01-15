import { useState } from "react";

function ItemCount( {stock} ) {

    const [counter, setCounter] = useState(1);

    const subtract = () => {
        if (counter > 1) {
            setCounter( counter - 1 );
        }
    }

    const add = () => {
        if (counter < stock) {
            setCounter( counter + 1 );
        }
    }

    return (
        <div className="item-count">
            <div>
                <button className="item-count_subtract" onClick={subtract}>-</button>
                <strong>{counter}</strong>
                <button className="item-count_add" onClick={add}>+</button>
            </div>
            <button className="item-count_add-to-car">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;