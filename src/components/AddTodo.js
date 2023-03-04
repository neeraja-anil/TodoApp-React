import React from 'react'

 function AddTodo(props) {


    console.log(props.toDos)
    

  return (
    <div className='input'>
        <input value={props.toDo} onChange={(e) => props.setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => props.setTodos([...props.toDos, { id: Date.now(), text: props.toDo, status: false }])} className="fas fa-plus"></i>

    </div>
  )
}

export default AddTodo