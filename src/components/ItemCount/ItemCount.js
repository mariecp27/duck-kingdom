import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function ItemCount( { id, stock, amount, setAmount, handleAddToCart, productInCart} ) {

    const handleSubtract = () => {
        amount > 1 && setAmount(amount - 1);
    }

    const handleAdd = () => {
        amount < stock && setAmount(amount + 1);
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="item-count">
            {
                !productInCart(id) &&
                    <div>
                        <button className="item-count_subtract" onClick={handleSubtract}>-</button>
                        <strong>{amount}</strong>
                        <button className="item-count_add" onClick={handleAdd}>+</button>
                    </div>
            }
            {
                !productInCart(id)
                    ? <button className="item-count_add-to-car" onClick={handleAddToCart}>Agregar al carrito</button>
                    : <button className="item-count_add-to-car" onClick={handleAddToCart} disabled={true}>Patito en el carrito</button>
            }
            {
                productInCart(id) &&
                    <Link
                        to="/cart"
                        className="item-count-finish"
                        data-aos="fade"
                    >
                            Terminar compra <FontAwesomeIcon icon = { faBasketShopping } />
                    </Link>
            }
            
        </div>
    )
}

export default ItemCount;