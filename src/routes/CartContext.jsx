import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const incrementQuantity = (id) => {
        const itemToAdd = cartItems.find(item => item.id === id);
        if (itemToAdd) {
            setCartItems(prevItems => [...prevItems, itemToAdd]);
        }
    };

    const decrementQuantity = (id) => {
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1) {
            const newCartItems = [...cartItems];
            newCartItems.splice(index, 1);  // remove one occurrence
            setCartItems(newCartItems);
        }
    };

    const emptyCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
