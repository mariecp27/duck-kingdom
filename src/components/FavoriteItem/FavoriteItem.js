import { formatterPeso } from "../../helpers/formatterPeso";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavoriteItem( { id, image, name, price, removeFromFavorites } ) {

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(id);
    }

    return (
        <div>
            <FontAwesomeIcon icon = { faHeart } onClick={handleRemoveFromFavorites} />
            <img src={process.env.PUBLIC_URL + image} alt={name} />
            <strong>{name}</strong>
            <strong>{formatterPeso(price)}</strong>
        </div>
    )
}

export default FavoriteItem;