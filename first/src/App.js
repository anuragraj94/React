import React from 'react';
import './App.css';
import WindowsForm from './component/window';
import Surface from './component/surface';
import Xbox from './component/xbox';
import Support from './component/support';
import Home from './component/home';
import Test from "./component/test";
import Active from "./component/Active";
import Another from "./component/anotherActive";
import Navbar from './component/navbar';
import Footer from './component/footer';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>

            <Switch>
            <Route path="/home">
            <Home  />
          </Route>
          <Route path="/window">
            <WindowsForm  />
          </Route>
          <Route path="/surface">
            <Surface  />
          </Route>
          <Route path="/xbox">
          <Xbox  />
          </Route>
          <Route path="/support">
            <Support   />
          </Route>  
          <Route path="/test">
            <Test   />
          </Route>   
          <Route path="/Active">
            <Active   />
          </Route>  
          <Route path="/anotherActive">
            <Another  />
          </Route>        
        </Switch>

            <Footer/>        
            </Router>
    </div>
  );
}

export default App;
