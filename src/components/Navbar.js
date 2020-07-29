import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => (
  // TODO: realize collapse nav (by install __react-bootstrap__ npm-packege)
  <nav className='navbar navbar-expand-sm navbar-light bg-light'>
    <div className='navbar-brand'>NoteApp</div>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarTogglerDemo02'
      aria-controls='navbarTogglerDemo02'
      aria-expanded='false'
      aria-label='Toggle navigation'
      onClick={() => {console.log('Click');}}
    >
      <span className='navbar-toggler-icon'></span>
    </button>

    <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        
        <li className='nav-item'>
          <NavLink className='nav-link' to='/' exact>
            Home
          </NavLink>
        </li>
        
        <li className='nav-item'>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

// (
  //   <nav className='navbar navbar-light navbar-expand-sm bg-light'>
  //     <div className='navbar-brand'>Note App</div>
  //     <div className='collapse navbar-collapse'>
  //       <ul className='navbar-nav '>
  //         <li className='nav-item'>
  //           <NavLink className='nav-link' to='/' exact>
  //             Home
  //           </NavLink>
  //         </li>

  //         <li className='nav-item'>
  //           <NavLink className='nav-link' to='/about'>
  //             About
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // )
