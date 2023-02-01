import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import PurchaseSummary from "../PurchaseSummary/PurchaseSummary";

function Checkout() {

    const { cart, totalCart } = useCartContext();

    const [values, setValues] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        paymentMethod: '',
        card: '',
        dueDateMonth: '',
        dueDateYear: '',
        cvc: ''
    });

    const getTotal = () => {
        return totalCart() * (1 + 0.19) + 10000;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            client: values,
            items: cart,
            total: getTotal()
        }

        console.log(order);
    }

    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/images/purchase.png"} className="cart_title" alt="Título"/>
            <hr />
            <PurchaseSummary
                getTotal={getTotal}
            />
            <CheckoutForm
                values={values}
                setValues={setValues}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Checkout;