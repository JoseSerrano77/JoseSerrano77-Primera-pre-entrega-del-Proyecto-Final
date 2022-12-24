import CartWidget from "../CartWidget/CartWidget"



const NavBar = ({navbar}) => {
  return (
    // <div>NavBar</div>
    <>
   
    <div className='grid-Buscar'>
       
        <h1 >Baron de la Cerveza</h1>
   
    

    <nav className='navbar'>
    <ul >
        
           <li><a href="#" >Cervezas</a> </li>
          <li><a  href="#" >Vinos</a> </li>
           <li><a href="#" >Sidras</a> </li>
           <li><a href="#" >Contacto</a> </li>
          <li><a href="#"><CartWidget/></a> </li>

          
    </ul>

    
    </nav>
    </div>
   
    
    </>
  )
}

export default NavBar