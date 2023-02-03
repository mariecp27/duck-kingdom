import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

function FavoriteContainer() {

    const { favorites } = useFavoritesContext();

    return (
        <div>
            <img className="favorite-container__title" src={process.env.PUBLIC_URL + "/assets/images/favorites.png"} alt="Título"/>
                <hr />
                {                
                    favorites.map(product => (
                        <FavoriteItem
                            key={product.id}
                            {...product}
                        />
                    ))
                }
        </div>
    )
}

export default FavoriteContainer;