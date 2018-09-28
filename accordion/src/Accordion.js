import React, { Component } from 'react';
import List from "./List";

class Accordion extends Component {

  state = {
    currentIndex: -1,
  };
  handleChange = i => {
    this.setState({
      currentIndex: i
    });
  };
  render() {
    const { handleChange } = this;
    const { currentIndex } = this.state;
    return (
      <div className="accordion">
        {this.props.data.map(function (e, i) {
          return (
            <List
              question={e.question}
              answer={e.answer}
              handleChange={handleChange}
              key={i}
              index={i}
              currentIndex={currentIndex}
            />
          );
        })}
      </div>
    );
  }
}
export default Accordion;