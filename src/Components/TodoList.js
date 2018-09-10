import React, { Component,Fragment } from 'react';
import Operator from './Operator';
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
    status:i%4===0?1:0//0 not complete 1 completed
  }
})
class TodoList extends Component {
  listHeight=document.body.clientHeight-96
  state={
    list:todoDemoList,
    showComplete:false
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
  toggleComplete(){
    this.setState({
      showComplete:!this.state.showComplete
    })
  }
  render() {
    let list=this.state.list
    if(!this.state.showComplete){
      list=list.filter((i)=>i.status===0)
    }
    return (
      <Fragment>
        <div className="TodoList" style={{height:`${this.listHeight}px`}}>
          {list.map((v)=>
              <Todo key={"todo"+v.id} {...v} toggleState={(todo)=>this.toggleState(todo)}></Todo>
          )}
        </div>
        <Operator showComplete={this.state.showComplete} toggleComplete={()=>this.toggleComplete()}></Operator>
      </Fragment>
    );
  }
}

export default TodoList;
