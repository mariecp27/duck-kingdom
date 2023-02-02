import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { formatterPeso } from "../../helpers/formatterPeso";

function OrderConfirmation( { id, items, date, total } ) {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <div>
            <img src={process.env.PUBLIC_URL + "/assets/images/thanks.png"} className="checkout_title" alt="Título"/>
            <hr />
            <section className="">
            <h2>Resumen de compra</h2>
            <div className="">
                {
                    items.map(product => (
                        <article key={product.id}>
                            <h3 className="m-0">{product.name}</h3>
                            <p className="m-0">x{product.amount}</p>
                            <p className="m-0">{formatterPeso(product.price * product.amount)}</p>
                        </article>
                    ))
                }
            </div>
            <hr className="" />
            <p><strong>Tu orden:</strong> {id}</p>
            <p>Fecha de compra: {date}</p>
            <strong>Total:<span> {formatterPeso(total)}</span></strong>
            <button
                className=""
                onClick={handleGoHome}
            >
                <FontAwesomeIcon icon={faCircleArrowLeft}/>Ir al inicio
            </button>
        </section>
        </div>
    )
}

export default OrderConfirmation;