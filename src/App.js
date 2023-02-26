

import React from 'react';
import './App.css';

import { useState } from 'react';



function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value) => {
            return (
              <div className="todo" id={value.status ? 'hidden' : undefined}>
                <div className="left" >
                  <input onChange={(e) => {

                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === value.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))

                  }} value={value.status} type="checkbox" name="" id="check" />
                  <label><p>{value.text}</p></label>

                </div>


                <div className="right">
                  <i onClick={(e) => {
                    console.log(value)
                    setTodos(toDos.filter(Deleteobj => {
                      if (Deleteobj.id === value.id) {
                        return Deleteobj.id !== value.id
                      }
                      return value
                    }))
                  }} className="fas fa-times"></i>
                </div>


              </div>
            )
          })



        }

        <h1>Its Done</h1>
        {

          toDos.map((value) => {
            if (value.status) {
              return (
                <div>

                  <div className='todo'>

                    <div className="left">
                      <input type="checkbox" value={value.status} onChange={(e) => {
                        console.log(e.target.checked)
                        console.log(value)
                        setTodos(toDos.filter(obj2 => {
                          if (obj2.id === value.id) {
                            console.log(e.target.checked)
                            obj2.status = e.target.checked

                          }
                          return obj2

                        }))
                      }} checked />
                      <label><p>{value.text}</p></label>
                      <p className='left'>{new Date().toLocaleTimeString()}</p>
                    </div>
                    <div className="right">

                      <i onClick={(e) => {
                        console.log(value)
                        setTodos(toDos.filter(Deleteobj => {
                          if (Deleteobj.id === value.id) {
                            return Deleteobj.id !== value.id
                          }
                          return value
                        }))
                      }} className="fas fa-times"></i>
                    </div>

                  </div>
                </div>


              )
            }
            return null
          })
        }

      </div>
    </div>
  );
}

export default App;
