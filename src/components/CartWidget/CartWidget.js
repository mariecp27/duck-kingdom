import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {

    const { productsAmountInCart } = useCartContext();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div>
            <Link
                to={"/cart"}
                className="navbar__car navbar__other-link"
            >
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className={productsAmountInCart() > 0 ? "active" : ""}
                />
                {
                    productsAmountInCart() > 0 && <span data-aos="fade"> {productsAmountInCart()}</span>
                }
            </Link>
        </div>
    );
}

export default CartWidget;
