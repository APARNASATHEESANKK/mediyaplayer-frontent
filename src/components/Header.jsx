import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
     <Navbar className="bg-info">
        <Container>
         <Link to={"/"} style={{textDecoration:'none'}}>
         <Navbar.Brand style={{color:'white',fontSize:'30px',fontWeight:'bold'}}>
          <i className="fa-solid fa-music me-2"></i>
          Media Player
          </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header