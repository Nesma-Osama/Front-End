'use server'
import React from 'react'
import { ToDo } from '@/types/ToDo/toDo'
import { useToDoList } from '@/store/ToDo/toDoList'
import { revalidatePath } from 'next/cache'
function addToDo(title: string) {
  const newToDo: ToDo = {
    isChecked: false,
    title: title,
    id: title.length,
  }

  const List = useToDoList.getState().toDoList
  useToDoList.setState({ toDoList: [...List, newToDo] })
  revalidatePath('/to-do')
}

export default addToDo
