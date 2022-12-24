import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../src/components/container/ItemListContainer/ItemListContainer.css'
import '../src/components/NavBar/NavBar.css'
import '../src/components/CartWidget/CartWidget.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return(
    <>
   
   
    <NavBar/> 
    <ItemListContainer saludo='Hola Coders Felices Fiestas!!!!!!!!'/>
    
    </>
    // <ComponenteContenedor saludo='Hola Home' />  // 
  )
}

export default App
