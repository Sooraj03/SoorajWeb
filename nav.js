import React from 'react';
import num from "./nav.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown , Button} from 'react-bootstrap';




const Navo = () =>{
   
   

    return(
       <div className={num.App}>
      <Navbar variant="dark"        sticky="top" expand="sm" collapseOnSelect
        className={num.Nav}>
        <Navbar.Brand>
          
          <img src="./images/kl.png" alt="logo" width="150px" height="130px" className={num.logo} />
        </Navbar.Brand>

        <Navbar.Toggle className={num.coloring} variant="dark" />
        <Navbar.Collapse>
          <Nav className={num.active}>
            <NavDropdown title="Home" className={num.main} >
              <NavDropdown.Item href="/" className={num.item}>Go to Home</NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo" className={num.item}>Exit</NavDropdown.Item>
            </NavDropdown>
             <Nav.Link href="#blog" className={num.aemo}>Images</Nav.Link>
            <Nav.Link href="#blog"  className={num.aemo}>Blog</Nav.Link>
            <Nav.Link href="#about-us" className={num.aemo}>About Us</Nav.Link>
            <Nav.Link href="/Contact" className={num.aemo}>Contact Us</Nav.Link>
            <div className={num.line}></div>
            <div className={num.button}>
            <Button variant="primary" className={num.button1} variant="dark" >
      Sign In --]
    </Button>{' '}
    <Button variant="secondary" className={num.button2} variant="dark" >
      Login --\
    </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      

      </Navbar>
      
    </div>
    
    )
};

export default Navo;