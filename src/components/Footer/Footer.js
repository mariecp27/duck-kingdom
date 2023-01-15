import SocialMedia from "../SocialMedia/SocialMedia";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import Rights from "../Rights/Rights";

function Footer() {
    return (
        <footer>
            <div>
                <SocialMedia />
                <PaymentMethods />
            </div>
            <Rights />
        </footer>
    )
}

export default Footer;