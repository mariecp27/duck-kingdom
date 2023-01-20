import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function ItemCount( { id, stock, amount, setAmount, handleAddToShoppingCar, productInCart} ) {

    const handleSubtract = () => {
        amount > 1 && setAmount(amount - 1);
    }

    const handleAdd = () => {
        amount < stock && setAmount(amount + 1);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="item-count">
            <div>
                <button className="item-count_subtract" onClick={handleSubtract}>-</button>
                <strong>{amount}</strong>
                <button className="item-count_add" onClick={handleAdd}>+</button>
            </div>
            {
                !productInCart(id)
                    ? <button className="item-count_add-to-car" onClick={handleAddToShoppingCar}>Agregar al carrito</button>
                    : <button
                        className="item-count_add-to-car"
                        onClick={handleAddToShoppingCar}
                        disabled={true}>Patito en el carrito</button>
            }
            {
                productInCart(id) &&
                    <Link
                        to="/cart"
                        className="item-count-finish"
                        data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-once="true">
                            Terminar compra <FontAwesomeIcon icon = { faBasketShopping } />
                    </Link>
            }
            
        </div>
    )
}

export default ItemCount;