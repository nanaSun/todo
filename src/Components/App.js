import React, { Component } from 'react';
import '../styles/App.css';
import TodoList from './TodoList'
import Operator from './Operator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppTitle">Nana's TodoList</div>
        <TodoList></TodoList>
        <Operator></Operator>
      </div>
    );
  }
}

export default App;
