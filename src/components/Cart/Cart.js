import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { formatterPeso } from "../../helpers/formatterPeso";
import AOS from "aos";
import "aos/dist/aos.css";
import CartItem from "../CartItem/CartItem";

function Cart() {
    const { cart, removeFromCart, emptyCart, totalCart, updateAmountInCart } = useCartContext();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="cart"            
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
        >
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
    );
}

export default Cart;