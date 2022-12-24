
import Tarjetas from "../../Tarjetas/Tarjetas"

const ItemListContainer= ({saludo})=> {
    return(
    
        <div className="promo">
     <h2>Envío Gratis desde $9999 solo CABA y zonas* de GBA + 3 cuotas sin interés: {saludo}</h2> 
 
     {/* <div>ItemListContainer</div> */}
     <Tarjetas/>
     
    
</div>
        
    )
}
export default ItemListContainer