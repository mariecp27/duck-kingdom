import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import CartContainer from "../CartContainer/CartContainer";
import NoCart from "../NoCart/NoCart";

function Cart() {
    const { cart, removeFromCart, emptyCart, totalCart, updateAmountInCart } = useCartContext();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="cart"            
            data-aos="fade-up"
        >
            {
                cart.length > 0
                ?   <CartContainer
                        cart={cart}
                        removeFromCart={removeFromCart}
                        emptyCart={emptyCart}
                        totalCart={totalCart}
                        updateAmountInCart={updateAmountInCart}
                    />
                :   <NoCart />
            }
        </div>
    );
}

export default Cart;