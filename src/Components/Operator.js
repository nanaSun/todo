import React  from 'react';
import '../styles/Operator.css';

/**
 *  操作栏
 */

function Operator(props){
  return (
    <div className="OperatorBar">
      <button onClick={props.toggleComplete}>{props.showComplete?"Show All":"Hide Complete"}</button>
      <button>Add Todo</button>
    </div>
  );
}

export default Operator;
