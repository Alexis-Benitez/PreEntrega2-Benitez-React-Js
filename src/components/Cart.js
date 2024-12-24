import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/styles.css';

const Cart = () => {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <h1>El carrito está vacío</h1>;
    }

    return (
        <div>
            <h1>Tu Carrito</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <h2>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
        </div>
    );
};

export default Cart;