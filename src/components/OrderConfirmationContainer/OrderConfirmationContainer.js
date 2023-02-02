import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation.js";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";

function OrderConfirmationContainer() {

    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setOrder(null);
        setLoading(true);

        const orderRef = doc(db, "duck-kingdom-orders", orderId);

        getDoc(orderRef)
            .then( (doc) => {
                setOrder({
                    ...doc.data(),
                    id: doc.id
                });
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });
    }, [orderId]);

    return (
        <div>      
            {
                loading
                    ? <Spinner />
                    : order.client
                        ? <OrderConfirmation {...order}/>
                        : <NotFound />
            }
        </div>
    )
}

export default OrderConfirmationContainer;