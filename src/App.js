

import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

import { useState} from 'react';
import Header from './Header';
import ShowTodo from './components/ShowTodo';
import CompletedTodos from './components/CompletedTodos';




function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')

  return (
    <div className="app">
      <Header/>
      <AddTodo toDos={toDos} setTodos={setTodos} setTodo={setTodo} toDo={toDo}/>
      <ShowTodo toDos={toDos} setTodos={setTodos}/>
      <CompletedTodos toDos={toDos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
