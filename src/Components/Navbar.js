import React from 'react'
import '../Style/nav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Navbar({size,clicked}) {
  return (
    <nav>
     <div className='nav-box'>
        <div className='logo'>
           <span className='logoText' onClick={()=>clicked(true)}>Dxo Shop</span>
        </div>
        <div className='icon'>
        <span>
        <i onClick={()=>clicked(false)} className="fas fa-shopping-cart"></i>
       </span>
        <span>{size}</span>
      
        </div>
        </div>  
    </nav>
  )
}

export default Navbar