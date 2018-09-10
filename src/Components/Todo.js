import React, { Component } from 'react';
import '../styles/Todo.css';

/**
 *  每一列的todo内容
 *  需要Todolist传入props
 */

class Todo extends Component {
  state={}
  constructor(props){
    super(props)
    this.state.status=this.props.status
  }
  toggleState(){
    console.log(this.state)
    this.setState({
      status:this.state.status===0?1:0
    })
  }
  componentWillReceiveProps(){
    console.log(this.props)
  }
  render() {
      return (
        <div className={this.props.status===1?"Todo completed":"Todo"}>
          <div className="TodoOperate" onClick={()=>this.props.toggleState({
            id:this.props.id,
            content:this.props.content,
            status:this.props.status===0?1:0
          })}></div> 
          <p>{this.props.content}</p>
        </div>
      );
  }
}

export default Todo;
