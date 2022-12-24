import './Tarjetas.css'

const Tarjetas = ({titulo = 'titulo', subtitulo= 'Subtitulo'})=>{
return (
<>
<div className="container">
       
        <div className="card">
        <img src="HeinekenLager710.jpg" className="logo"/>
            <h4>Cerveza</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
            <button><a href="#">Comprar</a></button>
        </div>
        
        
        
    </div>

</>
)
} 

export default Tarjetas


