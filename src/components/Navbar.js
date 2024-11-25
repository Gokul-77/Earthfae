import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        <a href='/home' className='logo'>Earthfae</a>
        <div className='navbar-content'>
          <ul>
            <li>
              <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '20px'}} to={'/home'} >Home</Link>
            </li>

            <li>
              <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '20px'}} to={'gallery'} >Gallery</Link>
            </li>

            <li>
              <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '20px'}} to={'calculation'} >Calculation</Link>
            </li>

            <li>
            <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '10px', borderRadius: '20px'}} to={'contact'} >Contact</Link>
            </li>

          </ul>
          
          
          
          
                        
        </div>
      
    </div>
  )
}

export default Navbar
