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
    status:i%4===0?0:1//0 not complete 1 completed
  }
})
class TodoList extends Component {
  listHeight=document.body.clientHeight-96
  state={
    list:todoDemoList
  }
  toggleState(todo){
    this.setState({
      list:this.state.list.map((t)=>{
        if(t.id===todo.id){
          console.log(todo)
          return todo
        }else{
          return t
        }
      })
    })
  }
  render() {
    return (
      <div className="TodoList" style={{height:`${this.listHeight}px`}}>
        {this.state.list.map((v)=>
            <Todo {...v} toggleState={(todo)=>this.toggleState(todo)}></Todo>
        )}
      </div>
    );
  }
}

export default TodoList;
