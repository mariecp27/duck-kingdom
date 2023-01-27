import { Link } from "react-router-dom";
import { formatterPeso } from "../../helpers/formatterPeso";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../../context/ModalContext";
import { useFavoritesContext } from "../../context/FavoritesContext";

function FavoriteItem( { id, image, name, price } ) {

    const { handleModal } = useModalContext();
    const { productInFavorites, removeFromFavorites } = useFavoritesContext();

    return (
        <div className="favorite-item">
            <FontAwesomeIcon
                icon={faHeart}
                className={`favorite-item__favorite ${productInFavorites(id) ? "active" : ""}`} 
                onClick={() => removeFromFavorites(id)} 
            />
            <img src={process.env.PUBLIC_URL + image} alt={name} />
            <Link to={`/item/${id}`} onClick={handleModal} className="productName">{name}</Link>
            <strong>{formatterPeso(price)}</strong>
        </div>
    )
}

export default FavoriteItem;