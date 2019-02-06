import React, { Component } from 'react';
import Nav from './components/Nav';
import RscMain from'./components/RscLibMain';




class App extends Component {
  
  render() {
    return (
      
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
      <Nav />
      <RscMain/>

      </div>
    );
  }
}

export default App;
