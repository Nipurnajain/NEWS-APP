
import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

import {BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
           
        <NavBar/>
        <Switch>
          <Route exact path="/General"><News key="general" pageSize={12} country="in" category="general"/></Route>
          
          <Route exact path="/Science"><News key="science" pageSize={12} country="in" category="science"/></Route>
          
          <Route exact path="/Health"><News key="health" pageSize={12} country="in" category="health"/></Route>
          
          <Route exact path="/Entertainment"><News key="entertainment" pageSize={12} country="in" category="entertainment"/></Route>
          
          <Route exact path="/Sports"><News key="sports" pageSize={12} country="in" category="sports"/></Route>
          
          <Route exact path="/Business"><News key="business" pageSize={12} country="in" category="business"/></Route>
          
          <Route exact path="/Technology"><News key="technology" pageSize={12} country="in" category="technology"/></Route>
          <Route exact path="/Home"><News key="home" pageSize={12} country="in" category="general"/></Route>
          
        </Switch>
        
        </Router>
        
        </div>
    )
  }

}
export default App
