import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../../context/ModalContext";
import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import NoFavorite from "../NoFavorite/NoFavorite";

function Modal() {

    const { modalStatus, handleModal } = useModalContext();
    const { favorites } = useFavoritesContext();

    return (
        <div className={`modal__overlay ${modalStatus ? "modal__active" : ""}`}>
            <div className="modal__container">
                <FontAwesomeIcon icon = { faXmarkCircle } onClick={handleModal} />
                {
                    favorites.length > 0
                        ?   <FavoriteContainer />
                        :   <NoFavorite />
                }
            </div>
        </div>
    )
}

export default Modal;