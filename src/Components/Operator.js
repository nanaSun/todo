import React, { Component } from 'react';
import '../styles/Operator.css';

/**
 *  操作栏
 */

class Operator extends Component {
  render() {
    return (
      <div className="OperatorBar">
        <button>Hide Complete</button>
        <button>Add Todo</button>
      </div>
    );
  }
}

export default Operator;
