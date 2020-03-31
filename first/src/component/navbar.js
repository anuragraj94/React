import React from 'react';
import { Navbar,Nav,Form,FormControl,Button,NavDropdown } from 'react-bootstrap';

const navbar=()=>{
    return (      
       <Navbar bg="dark" variant="dark">
       <Navbar.Brand href="/home">Navbar</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link href="/home">Home</Nav.Link>
         <Nav.Link href="/window">Windows</Nav.Link>
         <Nav.Link href="/xbox">Xbox</Nav.Link>
         <Nav.Link href="/surface">Surface</Nav.Link>
         <Nav.Link href="/support">Support</Nav.Link>         
         <Nav.Link href="/test">Test</Nav.Link>       
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Active">Action</NavDropdown.Item>
        <NavDropdown.Item href="/anotherActive">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>      
       </Nav>
       <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-info">Search</Button>
       </Form>
     </Navbar>
    )
}

export default navbar;