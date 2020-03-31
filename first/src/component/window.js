import React from 'react';
import { Button,ButtonGroup,ButtonToolbar,InputGroup,FormControl,DropdownButton,Dropdown,Card  } from 'react-bootstrap';

const WindowsForm=()=>{
    return (
       <div className="container">
           <div className="text-center">           
           <br/>
           <Button variant="primary" size="lg" active>
    Primary button
  </Button>{' '}
  <Button variant="secondary" size="lg" active>
    Button
  </Button>

  <br/><br/>
  <Button variant="primary" size="lg" disabled>
    Primary button
  </Button>{' '}
  <Button variant="secondary" size="lg" disabled>
    Button
  </Button>{' '}
  <Button href="#" variant="secondary" size="lg" disabled>
    Link
  </Button>
  <br/><br/>

  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>

<br/><br/>

<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>

<br/><br/>
<ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup aria-label="First group">
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>

  <br/><br/>
  <ButtonGroup size="lg" className="mb-2">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
  <br />
  <ButtonGroup className="mb-2">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
  <br />
  <ButtonGroup size="sm">
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>

  <br/><br/>

  <ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>

<br/><br/>
<ButtonGroup vertical>
  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <Button>Button</Button>
  <Button>Button</Button>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>

<br/><br/>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<br/><br/>
<Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>

<br/><br/>
<Card body>This is some text within a card body.</Card>
<br/><br/>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<br/><br/>
<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

<br/><br/>


<br/><br/>

  <br/><br/>
           </div>            
       </div>
    )
}

export default WindowsForm;