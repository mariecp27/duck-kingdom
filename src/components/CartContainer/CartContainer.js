import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import NoCart from "../NoCart/NoCart";

function CartContainer() {
    const { cart } = useCartContext();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div        
            data-aos="fade-up"
            className="cart"
        >
            {
                cart.length > 0
                ?   <Cart />
                :   <NoCart />
            }
        </div>
    );
}

export default CartContainer;