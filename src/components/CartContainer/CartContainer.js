import { useCartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import NoCart from "../NoCart/NoCart";

function CartContainer() {

    const { cart } = useCartContext();

    return (
        <div className="cart">
            {
                cart.length > 0
                ?   <Cart />
                :   <NoCart />
            }
        </div>
    );
}

export default CartContainer;