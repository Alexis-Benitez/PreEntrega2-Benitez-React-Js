import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
    <div style={styles.container}>
    <h2>{greeting}</h2>
    </div>
    );
};

const styles = {
container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "20px",
    },
};

export default ItemListContainer;