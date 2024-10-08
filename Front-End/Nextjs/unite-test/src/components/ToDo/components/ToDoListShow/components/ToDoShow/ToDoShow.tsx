import * as React from 'react'
import { ToDo } from '@/types/ToDo/toDo'
import { Separator } from '@/components/ui/separator'
export function ToDoShow({ toDo }: {toDo: ToDo }) {
  return (
    <>
      <div className="text-sm">
        {toDo.title}
      </div>
      <Separator className="my-2" />
    </>
  )
}
