import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav style={styles.navbar}>
        <h1 style={styles.brand}>Mi Tienda</h1>
        <ul style={styles.navLinks}>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#ofertas">Ofertas</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
    <CartWidget />
    </nav>
    );
};

const styles = {
navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
},
brand: {
    fontSize: "1.5rem",
},
navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    },
};

export default NavBar;