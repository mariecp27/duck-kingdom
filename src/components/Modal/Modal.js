import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoriteContainer from "../FavoriteContainer/FavoriteContainer";
import NoFavorite from "../NoFavorite/NoFavorite";

function Modal( { modalStatus, setModalStatus } ) {

    const { favorites, productInFavorites, removeFromFavorites } = useFavoritesContext();

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }

    return (
        <div className={`modal__overlay ${modalStatus && 'modal__active'}`}>
            <div className="modal__container">
                <FontAwesomeIcon icon = { faXmarkCircle } onClick={handleModal} />
                {
                    favorites.length > 0
                        ?   <FavoriteContainer
                                favorites={favorites}
                                productInFavorites={productInFavorites}
                                removeFromFavorites={removeFromFavorites}
                                modalStatus={modalStatus}
                                setModalStatus={setModalStatus}
                            />
                        :   <NoFavorite
                                modalStatus={modalStatus}
                                setModalStatus={setModalStatus}
                            />
                }
            </div>
        </div>
    )
}

export default Modal;