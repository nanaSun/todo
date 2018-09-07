import React, { Component } from 'react';
import '../styles/Todo.css';

/**
 *  每一列的todo内容
 *  需要Todolist传入props
 */

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <div className="TodoOperate"></div> 
        <p>我只是一个小demo{this.props.id}</p>
      </div>
    );
  }
}

export default Todo;
