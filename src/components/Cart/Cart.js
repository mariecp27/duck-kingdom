import { useCartContext } from "../../context/CartContext";
import { formatterPeso } from "../../helpers/formatterPeso";
import CartItem from "../CartItem/CartItem";

function Cart() {
    const { cart, removeFromCart, emptyCart, totalCart } = useCartContext();

    return (
        <div>
            <h1>Cart</h1>
            <hr />
            {
                cart.map(product => (
                    <CartItem
                        key={product.id}
                        {...product}
                        removeFromCart = {removeFromCart}
                    />
                ))
            }
            <h3>Total compra:{formatterPeso(totalCart())}</h3>
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;