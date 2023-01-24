import { formatterPeso } from "../../helpers/formatterPeso";
import CartItem from "../CartItem/CartItem";

function CartContainer( { cart, removeFromCart, emptyCart, totalCart, updateAmountInCart } ) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/images/cart.png"} className="cart_title" alt="Título" />
            <hr />
            {
                cart.map(product => (
                    <CartItem
                        key={product.id}
                        {...product}
                        removeFromCart={removeFromCart}
                        updateAmountInCart={updateAmountInCart}
                    />
                ))
            }
            <hr />
            <h3>Total compra: <span>{formatterPeso(totalCart())}</span></h3>
            <button className="cart_button" onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}

export default CartContainer;