
import Tarjetas from "../../Tarjetas/Tarjetas"
import { useState, useEffect } from "react"


const ItemListContainer= ({saludo})=> {
const [contador, setContador]= useState(0) //hook estado de un componeete
 
    const manejoContador = () => {
        // contador= contador + 1
        // console.log(contador)
        setContador (contador + 1)
    }
   

    return(
    //   fragment <> </>
        <div className="promo">
     <h2>Envío Gratis desde $9999 solo CABA y zonas* de GBA + 3 cuotas sin interés: {saludo}</h2> 
    

     {/* <div>ItemListContainer</div> */}
     <Tarjetas/>
        <p>Click  Nuevo:{contador}</p>
     <button onClick={manejoContador}> sumar</button> 
     {/* <button onClick= {() => setContador(contador +1)}> sumar</button>  */}
     {/* con cada onClick me genera un nuevo re render o actualizacion*/}
     
    
</div>
        
    )
}
export default ItemListContainer

// rendering : cuando se muestra el componente en el browser
