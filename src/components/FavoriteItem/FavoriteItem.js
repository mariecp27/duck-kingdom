import { Link } from "react-router-dom";
import { formatterPeso } from "../../helpers/formatterPeso";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavoriteItem( { id, image, name, price, productInFavorites, removeFromFavorites, modalStatus, setModalStatus } ) {

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(id);
    }

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }

    return (
        <div className="favorite-item">
            <FontAwesomeIcon
                icon={faHeart}
                className={`favorite-item__favorite ${productInFavorites(id) && 'active'}`} 
                onClick={handleRemoveFromFavorites} 
            />
            <img src={process.env.PUBLIC_URL + image} alt={name} />
            <Link to={`/duck-kingdom/item/${id}`} onClick={handleModal}>{name}</Link>
            <strong>{formatterPeso(price)}</strong>
        </div>
    )
}

export default FavoriteItem;