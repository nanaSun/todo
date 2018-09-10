import React  from 'react';
import {Consumer} from "./context"
import '../styles/Todo.css';

/**
 *  每一列的todo内容
 *  需要Todolist传入props
 */

function Todo(props){
  return (
    <Consumer>
      {value=>(<div className={props.status===1?"Todo completed":"Todo"}>
          <div className="TodoOperate" onClick={()=>value.toggleState({
            id:props.id,
            content:props.content,
            status:props.status===0?1:0
          })}></div> 
          <p>{props.content}</p>
        </div>)}
    </Consumer>
  );
}

export default Todo;
