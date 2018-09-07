import React, { Component } from 'react';
import '../styles/Todo.css';

/**
 *  每一列的todo内容
 *  需要Todolist传入props
 */

class Todo extends Component {
  render() {
      return (
        <div className={this.props.status===0?"Todo completed":"Todo"}>
          <div className="TodoOperate"></div> 
          <p>{this.props.content}</p>
        </div>
      );
  }
}

export default Todo;
