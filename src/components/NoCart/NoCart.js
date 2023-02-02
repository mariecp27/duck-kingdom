import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function NoCart() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="no-cart"
            data-aos="fade-up"
        >
            <img src={process.env.PUBLIC_URL + "/assets/images/oh.png"} alt="Título" className="cart_title checkout_title" />
            <h2>Parece que aún no hay patitos en tu carrito de compras</h2>
            <Link to={"/products"}>Ver todos los patitos</Link>
        </div>
    )
}

export default NoCart;