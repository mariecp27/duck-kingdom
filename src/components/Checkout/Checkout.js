import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, writeBatch, documentId, getDocs, query, addDoc, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { getDate } from "../../helpers/getDate.js";
import { useCartContext } from "../../context/CartContext";
import { validateForm } from "../../helpers/validateForm";
import ItemsOutOfStock from "../ItemsOutOfStock/ItemsOutOfStock.js";
import PurchaseSummary from "../PurchaseSummary/PurchaseSummary";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Spinner from "../Spinner/Spinner";

function Checkout() {
    
    const navigate = useNavigate();

    const { cart, emptyCart, totalCart } = useCartContext();

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
    const [loading, setLoading] = useState(false);
    const [itemsOutOfStock, setItemsOutOfStock] = useState([]);

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
    };

    useEffect( () => {

        const sendOrder = async() => {

            if (Object.keys(errors).length > 0) {
                return;
            }

            setLoading(true);
    
            const order = {
                client: values,
                items: cart,
                total: getTotal(),
                date: getDate()
            };
    
            const batch = writeBatch(db);
            const productsRef = collection(db, "duck-kingdom-products");
            const ordersRef = collection(db, "duck-kingdom-orders");

            const outOfStock = [];
    
            const productsQuery = query(productsRef, where(documentId(), "in", cart.map(product => product.id)));

            const productsInCart = await getDocs(productsQuery);

            productsInCart.docs.forEach( (doc) => {
                const product = cart.find(item => item.id === doc.id);

                if (doc.data().stock >= product.amount) {
                    batch.update(doc.ref, {stock:doc.data().stock - product.amount});
                } else {
                    outOfStock.push(product);
                }
            });

            if (outOfStock.length === 0) {
                batch.commit()
                    .then(() => {
                        addDoc(ordersRef, order)
                            .then( (doc) => {
                                setOrderId(doc.id);
                            })
                            .catch( (err) => {
                                console.log(err);
                            });
                    });
            } else {
                setItemsOutOfStock(outOfStock);
                setLoading(false);
            }
        }

        sendOrder();
    }, [errors]);

    useEffect( () => {
        if (orderId) {
            navigate(`/order/${orderId}`);
            emptyCart();
            setLoading(false);
        }
    }, [orderId])

    return (
        <div>
            {
                loading
                    ?   <Spinner />
                    :   <div>
                            <img src={process.env.PUBLIC_URL + "/assets/images/purchase.png"} className="checkout_title" alt="Título"/>
                            <hr />
                                {
                                    itemsOutOfStock.length > 0 &&
                                        <ItemsOutOfStock
                                            itemsOutOfStock={itemsOutOfStock}
                                        />
                                }
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
            }
        </div>
    )
}

export default Checkout;