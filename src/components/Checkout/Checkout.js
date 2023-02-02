import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { getDate } from "../../helpers/getDate.js";
import { useCartContext } from "../../context/CartContext";
import { validateForm } from "../../helpers/validateForm";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import PurchaseSummary from "../PurchaseSummary/PurchaseSummary";

function Checkout() {

    const { cart, emptyCart, totalCart } = useCartContext();

    const navigate = useNavigate();

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

    const [errors, setErrors] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        paymentMethod: '',
        card: '',
        cardOthers: ''
    });

    const [orderId, setOrderId] = useState(null);

    const getTotal = () => {
        return totalCart() * (1 + 0.19) + 10000;
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    useEffect( () => {
        if (Object.keys(errors).length > 0) {
            return;
        }
    
        const order = {
            client: values,
            items: cart,
            total: getTotal(),
            date: getDate()
        };

        const ordersRef = collection(db, "duck-kingdom-orders");

        addDoc(ordersRef, order)
            .then( (doc) => {
                setOrderId(doc.id);
            })
            .catch( (err) => {
                console.log(err);
            });
            
        }, [errors]);

    useEffect( () => {
        if (orderId) {
            navigate(`/order/${orderId}`);
            emptyCart();
        }
    }, [orderId])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(values));
    };

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