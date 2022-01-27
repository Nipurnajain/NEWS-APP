
import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={12}/>
      </div>
    )
  }

}
export default App
