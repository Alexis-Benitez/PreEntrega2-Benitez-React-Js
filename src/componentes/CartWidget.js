import React from "react";

const CartWidget = () => {
return (
    <div style={styles.cartWidget}>
    🛒 <span style={styles.badge}>3</span>
    </div>
    );
};

const styles = {
cartWidget: {
    fontSize: "1.2rem",
    color: "#fff",
    cursor: "pointer",
},
badge: {
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    marginLeft: "5px",
    fontSize: "0.9rem",
    },
};

export default CartWidget;
