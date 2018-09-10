import React, { Component } from 'react';
import '../styles/Operator.css';

/**
 *  操作栏
 */

class Operator extends Component {
  render() {
    return (
      <div className="OperatorBar">
        <button onClick={this.props.toggleComplete}>{this.props.showComplete?"Show All":"Hide Complete"}</button>
        <button>Add Todo</button>
      </div>
    );
  }
}

export default Operator;
