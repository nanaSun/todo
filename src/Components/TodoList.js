import React, { Component } from 'react';
import '../styles/TodoList.css';
import Todo from "./Todo"
/**
 *  需要传入todo数组
 *  需包含Todo组件
 */
let todoDemoList=(new Array(20)).join("|").split("|").map((v,i)=>{
  return {
    id:i,
    content:"demo"+(i+1),
    status:i%4==0?0:1//0 not complete 1 completed
  }
})
class TodoList extends Component {
  listHeight=document.body.clientHeight-96
  render() {
    return (
      <div className="TodoList" style={{height:`${this.listHeight}px`}}>
        {todoDemoList.map((v)=>
            <Todo {...v} ></Todo>
        )}
      </div>
    );
  }
}

export default TodoList;
