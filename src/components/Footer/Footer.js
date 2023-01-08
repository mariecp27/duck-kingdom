import SocialMedia from "./SocialMedia";
import PaymentMethods from "./PaymentMethods";
import Rights from "./Rights";

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