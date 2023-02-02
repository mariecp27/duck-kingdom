import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../../context/CartContext";
import Checkout from "../Checkout/Checkout";
import NoCart from "../NoCart/NoCart";

function CheckoutContainer() {

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
            className="checkout"
        >
            {
                cart.length > 0
                ?   <Checkout />
                :   <NoCart />
            }
        </div>
    );
}

export default CheckoutContainer;