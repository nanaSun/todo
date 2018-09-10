import React  from 'react';
import {Consumer} from "./context"
import '../styles/Operator.css';

/**
 *  操作栏
 */

function Operator(props){
  return (
    <Consumer>
    {value=>(
      <div className="OperatorBar">
        <button onClick={value.toggleComplete}>{value.showComplete?"Show All":"Hide Complete"}</button>
        <button>Add Todo</button>
      </div>
      )}
    </Consumer>
  );
}

export default Operator;
