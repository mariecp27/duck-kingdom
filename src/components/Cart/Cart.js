import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../../context/CartContext";
import CartContainer from "../CartContainer/CartContainer";
import NoCart from "../NoCart/NoCart";

function Cart() {
    const { cart } = useCartContext();

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
                ?   <CartContainer />
                :   <NoCart />
            }
        </div>
    );
}

export default Cart;