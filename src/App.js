import React, { Component } from 'react';
import TodoList from './components/todo-list';
import './App.css';

import toDos from './data';

class App extends Component {
  render() {
    return (
        <TodoList tasks={toDos} />
    );
  }
}

export default App;
