import React,{useState} from 'react';
import { Navbar,Nav,Form,FormControl,Button,NavDropdown,Modal } from 'react-bootstrap';

const navbar=()=>{
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <NavDropdown.Item href="/tbl">Table</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>      
       </Nav>
       <Form inline>
       <Button variant="outline-info" onClick={handleShow}>
          Log In
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <br/><br/>
       </Form>
     </Navbar>
    )
}

export default navbar;