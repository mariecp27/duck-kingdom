import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa, faCcAmazonPay } from "@fortawesome/free-brands-svg-icons";

function PaymentMethods() {
    return (
        <div className="payment-methods">
            <h3>Medios de pago aceptados</h3>
            <div className="payment-methods-icons">
                <FontAwesomeIcon icon={faCcMastercard}/>
                <FontAwesomeIcon icon={faCcVisa}/>
                <FontAwesomeIcon icon={faCcAmazonPay}/>
            </div>
        </div>
    )
}

export default PaymentMethods;