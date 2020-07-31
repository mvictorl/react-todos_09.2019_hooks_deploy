import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'

export const MyNavBar = () => (
  // TODO: realize collapse nav (by install __react-bootstrap__ npm-packege)
  
  <Navbar bg="light" expand="sm">
    <Navbar.Brand>NoteApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  // <nav className='navbar navbar-expand-sm navbar-light bg-light'>
  //   <div className='navbar-brand'>NoteApp</div>
  //   <button
  //     className='navbar-toggler'
  //     type='button'
  //     data-toggle='collapse'
  //     data-target='#navbarTogglerDemo02'
  //     aria-controls='navbarTogglerDemo02'
  //     aria-expanded='false'
  //     aria-label='Toggle navigation'
  //     onClick={() => {console.log('Click');}}
  //   >
  //     <span className='navbar-toggler-icon'></span>
  //   </button>

  //   <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
  //     <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        
  //       <li className='nav-item'>
  //         <NavLink className='nav-link' to='/' exact>
  //           Home
  //         </NavLink>
  //       </li>
        
  //       <li className='nav-item'>
  //         <NavLink className='nav-link' to='/about'>
  //           About
  //         </NavLink>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
)