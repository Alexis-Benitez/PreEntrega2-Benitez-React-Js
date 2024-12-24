const items = [
    { id: '1', name: 'Laptop', price: 1200, category: 'electronics', description: 'Laptop de alta gama' },
    { id: '2', name: 'Camiseta', price: 20, category: 'clothing', description: 'Camiseta cómoda y de calidad' },
    { id: '3', name: 'Sofá', price: 500, category: 'home', description: 'Sofá cómodo para tu hogar' },
];

export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? items.filter(item => item.category === categoryId) : items);
        }, 1000);
    });
};

export const getItemById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id === id));
        }, 1000);
    });
};