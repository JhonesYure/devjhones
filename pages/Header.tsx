import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <Navbar expand="lg"  style={{backgroundColor: '#343434', position: 'fixed', top:0, left: 0,padding:0, margin:0,  }} fixed='top'>
      <Container>
        <Navbar.Brand href="#" className="col-6">
            <picture>
            <img src='/logo.png' style={{width:200, color:'white'}} alt={""}/>
            </picture>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto texto">
            <Nav.Link href="#Sobre" id='txt' style={{color:'white', fontWeight: 800, fontSize: 25, textAlign: 'center',marginLeft:20, justifyItems: 'center',  float:'right'}}  >
                Sobre mim
            </Nav.Link>
            <Nav.Link href="#Projects" style={{color:'white', fontWeight: 800, fontSize: 25, textAlign: 'center',marginLeft:20,  float:'right'}}>
                Projetos
            </Nav.Link>
            <Nav.Link href="#skills" style={{color:'white', fontWeight: 800, fontSize: 25, textAlign: 'center',marginLeft:20,  float:'right'}}>
                Habilidades
            </Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    
      <style jsx>
        {`
        
        `}
      </style>
    </Navbar>
    )
}

export default Header;