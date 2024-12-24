import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../mocks/asyncMocks';
import '../styles/styles.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItemById(itemId).then(data => setItem(data));
    }, [itemId]);

    if (!item) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="item-detail">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    );
};

export default ItemDetailContainer;