import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";

const App = () => {
    return (
    <div>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda online!" />
    </div>
    );
};

export default App;