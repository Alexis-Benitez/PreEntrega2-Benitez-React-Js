import React, { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((prod) => prod.id === item.id);
            if (existingItem) {
                return prevCart.map((prod) =>
                    prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;