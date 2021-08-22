
import './App.css';
import NavbarLogin from '../src/navbar/navbar.js';
import Login from '../src/login/login.js';
import { Navbar } from "react-bootstrap";

import SingIn from './signIn/signin.js';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import { render } from '@testing-library/react';
import SignIn from '../src/pages/signIn.js';

function App() {

    return (
      <>
      <Router>
        <div className="app">
          <Navbar title="PATITAS DE LA CALLE"/> 
          <Switch>
            <Route path='/SignIn' exact component={SignIn}/>
            <Route path='/Login' exact component={Login}/>
          </Switch>

        </div>
      </Router>
      </>
    /*<div className="App">
      
      <header className="App-header">
        <NavbarLogin>


        </NavbarLogin>
      </header>


      <body className="App-body">
       <Login></Login>
        

      </body>
    </div>
    */
  );

  
}





export default App;
