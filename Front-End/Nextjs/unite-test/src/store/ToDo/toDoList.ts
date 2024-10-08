import { create } from 'zustand'
import { ToDoList } from '@/types/ToDo/toDo'
export const useToDoList = create<ToDoList>((set) => ({
  toDoList: [],
  addNewToDo: (toDo) => {
    set((state) => ({
      toDoList: [...state.toDoList, toDo],
    }))
  },
}))
