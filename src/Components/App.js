import React, { Component } from 'react';
import '../styles/App.css';
import TodoList from './TodoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppTitle">Nana's TodoList</div>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
