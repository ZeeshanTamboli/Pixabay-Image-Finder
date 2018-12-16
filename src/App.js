import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import InputText from './components/InputText/InputText';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <InputText />
      </React.Fragment>
    );
  }
}

export default App;
