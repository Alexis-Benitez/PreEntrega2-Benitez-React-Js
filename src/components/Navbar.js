import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/styles.css';

const Navbar = () => {
    const { cart } = useContext(CartContext);

    // Calcular la cantidad total de productos en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav>
            <Link to="/">Inicio</Link>
            <ul>
                <li><Link to="/category/electronics">Electrónica</Link></li>
                <li><Link to="/category/clothing">Ropa</Link></li>
                <li><Link to="/category/home">Hogar</Link></li>
            </ul>
            <Link to="/cart">Carrito ({totalItems})</Link>
        </nav>
    );
};

export default Navbar;