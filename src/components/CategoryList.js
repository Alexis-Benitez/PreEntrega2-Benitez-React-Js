import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const categories = [
    { id: 'electronics', name: 'Electrónica' },
    { id: 'clothing', name: 'Ropa' },
    { id: 'home', name: 'Hogar' },
];

const CategoryList = () => {
    return (
        <div className="category-list">
            {categories.map(category => (
                <Link key={category.id} to={`/category/${category.id}`}>
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default CategoryList;