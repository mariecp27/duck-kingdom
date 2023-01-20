import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { formatterPeso } from "../../helpers/formatterPeso";
import { Button } from "react-bootstrap";

function CartItem( { id, image, name, amount, price, removeFromCart } ) {
    return (
        <div>
            <Link to={`/item/${id}`}>
                <img src={process.env.PUBLIC_URL + image} alt={name}/>
            </Link>
            <Link to={`/item/${id}`}>
                <h4>{name}</h4>
            </Link>
            <p>{amount}</p>
            <strong>{formatterPeso(price * amount)}</strong>
            <Button onClick={() => removeFromCart(id)}>
                <FontAwesomeIcon icon = { faTrashCan } />
            </Button>
        </div>
    );
}

export default CartItem;