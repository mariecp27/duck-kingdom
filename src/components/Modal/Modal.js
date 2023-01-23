import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

function Modal( { modalStatus, setModalStatus } ) {

    const { favorites, productInFavorites, removeFromFavorites } = useFavoritesContext();

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }

    return (
        <div className={`modal__overlay ${modalStatus && 'modal__active'}`}>
            <div className="modal__container">
                <FontAwesomeIcon icon = { faXmarkCircle } onClick={handleModal} />
                <img src={process.env.PUBLIC_URL + "/assets/images/favorites.png"} alt="Título" />
                <hr />
                {                
                    favorites.map(product => (
                        <FavoriteItem
                            key={product.id}
                            {...product}
                            productInFavorites={productInFavorites}
                            removeFromFavorites={removeFromFavorites}
                            modalStatus={modalStatus}
                            setModalStatus={setModalStatus}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Modal;