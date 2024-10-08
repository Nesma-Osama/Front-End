export type ToDo = {
  id: number
  title: string
  isChecked: boolean
}

export type ToDoList = {
  toDoList: ToDo[]
  addNewToDo: (toDo: ToDo) => void
}
