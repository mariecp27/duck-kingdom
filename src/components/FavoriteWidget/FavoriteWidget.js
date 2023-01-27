import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../../context/ModalContext";
import { useFavoritesContext } from "../../context/FavoritesContext";

function FavoriteWidget() {

    const { handleModal } = useModalContext();
    const { favorites } = useFavoritesContext();

    return (
        <button className="navbar__favorites" onClick={handleModal}>
            <FontAwesomeIcon
            icon={faHeart}
            className={favorites.length > 0 ? "active" : ""}
            /> Favoritos
        </button>
    )
}

export default FavoriteWidget;