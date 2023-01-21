import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "../src/components/container/ItemListContainer/ItemListContainer.css";
import "../src/components/NavBar/NavBar.css";
import "../src/components/CartWidget/CartWidget.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";



function App() {
  return (
    
    <> 
      <NavBar />
      <ItemListContainer saludo="Cargando..." despedida="ULTIMA BIRRA" />
       
    </>
    // <ComponenteContenedor saludo='Hola Home' />  //
  );
}

export default App;
