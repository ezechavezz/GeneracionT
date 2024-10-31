import React, { createContext, useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevCart => [...prevCart, product])
    };

    const removeFromCart = (index) => {
        setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
          {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };