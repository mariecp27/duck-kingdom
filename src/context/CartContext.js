import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

export const CartProvider = ( { children } ) => {

    const initialState = JSON.parse(localStorage.getItem("cart")) || [];
    
    const [cart, setCart] = useState(initialState);
    
    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const productInCart = (id) => {
        return cart.some(product => product.id === id);
    }
    
    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const emptyCart = () => {
        setCart([]);
    }

    const totalCart = () => {
        return cart.reduce((total, product) => total + (product.price * product.amount), 0);
    }

    const productsAmountInCart = () => {
        return cart.reduce((total, product) => total + product.amount, 0);
    }

    const updateAmountInCart = (id, amount) => {
        cart.forEach(product => {
            if (product.id === id) {
                let index = cart.indexOf(product);
                let newCart = [...cart];
                newCart[index].amount = amount;
                setCart(newCart);
            }
        });
    }
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            productInCart,
            removeFromCart,
            emptyCart,
            totalCart,
            productsAmountInCart,
            updateAmountInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}