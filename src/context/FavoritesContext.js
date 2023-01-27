import { createContext, useContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
}

export const FavoritesProvider = ( { children } ) => {

    const initialState = JSON.parse(localStorage.getItem("favorites")) || [];
    
    const [favorites, setFavorites] = useState(initialState);

    const addToFavorites = (product) => {
        setFavorites([...favorites, product]);
    }

    const productInFavorites = (id) => {
        return favorites.some(product => product.id === id);
    }
    
    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(product => product.id !== id));
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    return(
        <FavoritesContext.Provider value={{
            favorites, 
            addToFavorites,
            productInFavorites,
            removeFromFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}
