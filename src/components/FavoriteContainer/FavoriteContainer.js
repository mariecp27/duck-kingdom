import FavoriteItem from "../FavoriteItem/FavoriteItem";

function FavoriteContainer( { favorites, productInFavorites, removeFromFavorites, modalStatus, setModalStatus } ) {
    return (
        <div>
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
    )
}

export default FavoriteContainer;