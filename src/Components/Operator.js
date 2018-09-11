import React  from 'react';
import '../styles/Operator.css';

/**
 *  操作栏
 */

function Operator(props){
  return (
    <div className="OperatorBar">
      <button onClick={props.toggleComplete}>{props.showComplete?"Hide Complete":"Show All"}</button>
      <button>Add Todo</button>
    </div>
  );
}

export default Operator;
