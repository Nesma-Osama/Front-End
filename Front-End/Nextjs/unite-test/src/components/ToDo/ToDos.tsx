import React from 'react'
import Nav from './components/Nav/Nav'
import ToDoListShow from './components/ToDoListShow/ToDoList'
function ToDos() {
  return (
    <div className="flex flex-col space-y-3 w-96 justify-center mx-auto my-9 rounded-md">
      <Nav />
      <ToDoListShow />
    </div>
  )
}

export default ToDos
