import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { formatterPeso } from "../../helpers/formatterPeso";
import { useCartContext } from "../../context/CartContext";

function CartItem( { id, image, name, amount, price, stock } ) {

    const { removeFromCart, updateAmountInCart } = useCartContext();

    const [amountInCart, setAmountInCart] = useState(amount);

    const handleSubtract = () => {
        amountInCart > 1 && setAmountInCart(amountInCart - 1);
    }

    const handleAdd = () => {
        amountInCart < stock && setAmountInCart(amountInCart + 1);
    }
    
    useEffect(() => {
        updateAmountInCart(id, amountInCart);
    }, [id, amountInCart]);
    

    return (
        <div className="cart-item">
            <Link className="cart-item_img" to={`/item/${id}`}>
                <img src={process.env.PUBLIC_URL + image} alt={name}/>
            </Link>
            <div className="cart-item_title">
                <Link className="cart-item_title-name productName" to={`/item/${id}`}>
                    {name}
                </Link>
                <p>Patitos disponibles: {stock}</p>
            </div>
            <div className="cart-item_text">
                <div>
                    <button className="cart-item_subtract" onClick={handleSubtract}>-</button>
                    <strong>{amountInCart}</strong>
                    <button className="cart-item_add" onClick={handleAdd}>+</button>
                </div>
                <strong className="cart-item_price">{formatterPeso(price * amount)}</strong>
                <button className="cart-item-trash" onClick={() => removeFromCart(id)}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button>
            </div>
        </div>
    );
}

export default CartItem;