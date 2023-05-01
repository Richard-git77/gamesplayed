import {NavLink} from 'react-router-dom'
import '../navbar.css'
export const NavBar = () => {
  return (




    <>

            <nav className='navbar'>
              
                <NavLink className='links' to='search'>Search</NavLink>
                <NavLink className='links' to='app'>Home</NavLink>
                <NavLink className='links' to='chest'>Chest</NavLink>
            
            </nav>



    </>
  )
}
