import React, { Component,Fragment } from 'react';
import Operator from './Operator';
import '../styles/TodoList.css';
import Todo from "./Todo"
import {connect} from 'react-redux'
import {getTodos,toggleTodo} from '../store/actions/Todo'
//import {Provider} from "./context"



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
    showComplete:true
  }
  constructor(props){
    super(props)
    this.props.getTodos(todoDemoList);
  }
  toggleState(id){
    this.props.toggleTodo(id)
  }
  toggleComplete(){
    this.setState({
      showComplete:!this.state.showComplete
    })
  }
  render() {
    let list=this.props.todos
    if(!this.state.showComplete){
      list=list.filter((i)=>i.status===0)
    }
    return (
      <Fragment>
        <div className="TodoList" style={{height:`${this.listHeight}px`}}>
          {list.map((v)=>
              <Todo key={"todo"+v.id} {...v} toggleState={()=>this.toggleState(v.id)} ></Todo>
          )}
        </div>
        <Operator toggleComplete={()=>this.toggleComplete()} showComplete={this.state.showComplete}></Operator>
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    todos:state.todo.todos||[]
  }
}
function mapDispatchToProps(dispatch){
  return{
    getTodos:(items)=>{dispatch(getTodos({items:items}))},
    toggleTodo:(id)=>{dispatch(toggleTodo({id:id}))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
