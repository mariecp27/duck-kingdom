import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { validateForm } from "../../helpers/validateForm";
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
    const [errors, setErrors] = useState({});

    const getTotal = () => {
        return totalCart() * (1 + 0.19) + 10000;
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(values));

        if (Object.keys(errors).length > 0) {
            return;
        }
        
        const order = {
            client: values,
            items: cart,
            total: getTotal()
        }

        console.log(order);
    }

    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/images/purchase.png"} className="checkout_title" alt="Título"/>
            <hr />
            <div className="checkout-content">
                <PurchaseSummary
                    getTotal={getTotal}
                />
                <CheckoutForm
                    values={values}
                    errors={errors}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default Checkout;