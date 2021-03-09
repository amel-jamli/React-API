import './App.css';
import UserList from './Components/UserList';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Profile from './Components/Profile';
import { useState } from 'react';
import { Button , Navbar ,Form ,Nav ,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  console.log(listOfUSer)
  return (
    <div classname="map-cards">
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">React-API</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </div>
      
        <Route exact path='/'><UserList setListOfUSer={setListOfUSer} listOfUSer={listOfUSer} /></Route>
        <Route path='/Profile/:id' render={(props) => <Profile listOfUSer={listOfUSer} {...props} />} />
     
    </div>
  );
}

export default App;
