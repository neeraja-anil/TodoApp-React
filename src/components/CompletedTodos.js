import React from 'react'

function CompletedTodos(props) {
  return (
    <div className='todos'>
        <h1>Its Done</h1>
        {
          props.toDos.map((value) => {
            if (value.status) {
              return (
                <div>

                  <div className='todo'>

                    <div className="left">
                      <input type="checkbox" value={value.status} onChange={(e) => {
        
                        props.setTodos(props.toDos.filter(obj2 => {
                          if (obj2.id === value.id) {
                            obj2.status = e.target.checked

                          }
                          return obj2

                        }))
                      }} checked={value.status} />
                      <label><p>{value.text}</p></label>
                      <p className='left'>{new Date().toLocaleTimeString()}</p>
                    </div>
                    <div className="right">

                      <i onClick={(e) => {
                        console.log(value)
                        props.setTodos(props.toDos.filter(Deleteobj => {
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
  )
}

export default CompletedTodos