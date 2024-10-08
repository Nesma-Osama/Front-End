import * as React from 'react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { ToDoShow } from './components/ToDoShow/ToDoShow'
import { ToDo } from '@/types/ToDo/toDo'
function ToDoListShow({ toDoList }: { toDoList: ToDo[] }) {
  return (
    <ScrollArea className="h-72 w-3/4 mx-auto rounded-md border my-4">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">To Do</h4>
        {toDoList.map((toDo) => (
          <ToDoShow toDo={toDo} key={toDo.id} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default ToDoListShow
