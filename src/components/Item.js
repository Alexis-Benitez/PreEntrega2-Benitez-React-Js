import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/styles.css';

const Item = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="item-card">
            <h2>{item.name}</h2>
            <p>Precio: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Agregar al Carrito</button>
            <Link to={`/item/${item.id}`}>Ver Detalles</Link>
        </div>
    );
};

export default Item;