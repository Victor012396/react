import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../views/Home/Home'
import Adopt from '../views/Adopt/Adopt'
import Stories from '../views/Stories/Stories'
import Meet_Us from '../views/MeetUs/MeetUs'
import LogIn from '../views/LogIn/LogIn';
import SignIn from '../views/SignIn/signIn';

export default class Routes extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <>
      <Router>
        <div className="app"> 
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/adopt' exact component={Adopt}/>
            <Route path='/stories' exact component={Stories}/>
            <Route path='/meet-us' exact component={Meet_Us}/>
            <Route path='/log-in' exact component={LogIn}/>
            <Route path='/sign-up' exact component={SignIn}/>
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}
