import React from 'react'

function ShowTodo({setTodos,toDos}) {
  return (
    <div className='todos'>
        {
            toDos.map((value)=>{
                return(
                    <div className="todo" id={value.status ? 'hidden' : undefined}>
                <div className="left" >
                  <input onChange={(e) => {

                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === value.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))

                  }} value={value.status} type="checkbox" name="" id="check" checked={value.status} />
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
                  }} className="fas fa-times" ></i>
                </div>


              </div>
                )
            })
        }
    </div>
  )
}

export default ShowTodo