import React, { Component } from 'react';
import '../styles/TodoList.css';
import Todo from "./Todo"
/**
 *  需要传入todo数组
 *  需包含Todo组件
 */

class TodoList extends Component {
  listHeight=document.body.clientHeight-96
  demoList=(new Array(20)).join("|").split("|")
  render() {
    return (
      <div className="TodoList" style={{height:`${this.listHeight}px`}}>
        {this.demoList.map((v,i)=>
            <Todo id={i}></Todo>
        )}
      </div>
    );
  }
}

export default TodoList;
