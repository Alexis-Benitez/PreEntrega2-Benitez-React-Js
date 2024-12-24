import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItemsByCategory } from '../mocks/asyncMocks';
import Item from './Item';
import CategoryList from './CategoryList';
import '../styles/styles.css';

// Mapa de traducción de categorías
const categoryTranslations = {
    electronics: 'Electrónica',
    clothing: 'Ropa',
    home: 'Hogar',
};

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItemsByCategory(categoryId).then(data => setItems(data));
    }, [categoryId]);

    return (
        <div>
            <CategoryList />
            <h1>{categoryId ? `Categoría: ${categoryTranslations[categoryId] || categoryId}` : 'Todos los Productos'}</h1>
            <div className="item-container">
                {items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;