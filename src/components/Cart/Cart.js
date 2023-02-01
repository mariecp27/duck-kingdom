import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { formatterPeso } from "../../helpers/formatterPeso";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

function Cart() {

    const { cart, emptyCart, totalCart } = useCartContext();

    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/images/cart.png"} className="cart_title" alt="Título"/>
            <hr />
            {
                cart.map(product => (
                    <CartItem
                        key={product.id}
                        {...product}
                    />
                ))
            }
            <hr />
            <h3>Total compra: <span>{formatterPeso(totalCart())}</span></h3>
            <Link to={"/checkout"} className="cart_finish">Finalizar compra</Link>
            <button className="cart_empty" onClick={emptyCart}>
                <FontAwesomeIcon icon={faTrashCan}/> Vaciar carrito
            </button>
        </div>
    )
}

export default Cart;