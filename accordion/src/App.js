import React, { Component } from 'react';
import Accordion from './Accordion';
import qa from "./qa";

class App extends Component {
  render() {
    return (
      <Accordion data={qa} />
    );
  }
}

export default App;