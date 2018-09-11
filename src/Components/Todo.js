import React,{Component}  from 'react';
import '../styles/Todo.css';
/**
 *  每一列的todo内容
 *  需要Todolist传入props
 */
 function Todo(props){
  return (
    <div onClick={props.toggleState} className={props.status===1?"Todo completed":"Todo"}>
      <div className="TodoOperate"></div> 
      <p>{props.content}</p>
    </div>
  );
}
export default Todo
