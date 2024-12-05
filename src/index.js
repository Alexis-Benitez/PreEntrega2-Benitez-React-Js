import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente raíz

// Crea el punto de conexión con el DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza tu aplicación
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);