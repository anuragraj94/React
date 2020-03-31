import React from 'react';
import { Button,Badge,Alert } from 'react-bootstrap';

const Home=()=>{
    return (
       <div className="container">
           <div className="text-center">
    
           <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>

<Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
<br/><br/>


<Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>

  <br/><br/>

  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>

  <br/><br/>
  <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  <Button as="input" type="button" value="Input" />{' '}
  <Button as="input" type="submit" value="Submit" />{' '}
  <Button as="input" type="reset" value="Reset" />

  <br/><br/>
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Large button
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Large button
    </Button>
  </div>
  <div>
    <Button variant="primary" size="sm">
      Small button
    </Button>{' '}
    <Button variant="secondary" size="sm">
      Small button
    </Button>
  </div>

  <br/><br/>
<Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>

  <br/><br/><br/>
           </div>            
       </div>
    )
}

export default Home;