import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <div className='navbar__car'>
            <FontAwesomeIcon icon = { faBasketShopping } /> 5        
        </div>
    );
}

export default CartWidget;
