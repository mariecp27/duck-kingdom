import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { formatterPeso } from "../../helpers/formatterPeso";

function OrderConfirmation( { id, items, date, total } ) {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div
            className="order-confirmation"
            data-aos="fade-up"
        >
            <img src={process.env.PUBLIC_URL + "/assets/images/thanks.png"} className="order-confirmation_title" alt="Título"/>
            <hr />
            <section className="order-confirmation__container">
                <h2>Resumen de compra</h2>
                <div className="order-confirmation__products">
                    {
                        items.map(product => (
                            <article key={product.id}>
                                <h3 className="productName m-0">{product.name}</h3>
                                <p className="m-0">x{product.amount}</p>
                                <p className="m-0">{formatterPeso(product.price * product.amount)}</p>
                            </article>
                        ))
                    }
                </div>
                <hr className="order-confirmation__hr" />
                <div className="order-confirmation_details">
                    <p><strong>Tu orden:</strong> {id}</p>
                    <p><strong>Fecha de compra:</strong> {date}</p>
                    <strong>Total:<span> {formatterPeso(total)}</span></strong>
                </div>
            </section>
            <button
                className=""
                onClick={handleGoHome}
            >
                <FontAwesomeIcon icon={faCircleArrowLeft}/> Ir al inicio
            </button>
        </div>
    )
}

export default OrderConfirmation;