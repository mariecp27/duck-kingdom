import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { formatterPeso } from "../../helpers/formatterPeso";
import { useCartContext } from "../../context/CartContext";
import Spinner from "../Spinner/Spinner";
import CartItem from "../CartItem/CartItem";

function Cart() {

    const { cart, emptyCart, totalCart } = useCartContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsRef = collection(db, "duck-kingdom-products");

        const productsQuery = query(productsRef, where(documentId(), "in", cart.map(product => product.id)));
    
        getDocs(productsQuery)
            .then( (res) => {
                res.docs.forEach( (doc) => {
                    for (let i = 0; i < cart.length; i++) {
                        if (cart[i].id === doc.id ) {
                            cart[i].stock = doc.data().stock;
                        }
                    }
                })
            })
            .catch( (err) => {
                console.log(err);
            })
            .finally( () => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div>
            {
                loading
                    ?   <Spinner />
                    :   <div data-aos="fade-up">
                            <img src={process.env.PUBLIC_URL + "/assets/images/cart.png"} className="cart_title" alt="Título"/>
                            <hr />
                            {
                                cart.map(product => (
                                    <CartItem
                                        key={product.id}
                                        {...product}
                                    />
                                ))
                            }
                            <hr />
                            <h3>Total compra: <span>{formatterPeso(totalCart())}</span></h3>
                            <Link to={"/checkout"} className="cart_finish">Finalizar compra</Link>
                            <button className="cart_empty" onClick={emptyCart}>
                                <FontAwesomeIcon icon={faTrashCan}/> Vaciar carrito
                            </button>
                        </div>
            }
        </div>
    )
}

export default Cart;