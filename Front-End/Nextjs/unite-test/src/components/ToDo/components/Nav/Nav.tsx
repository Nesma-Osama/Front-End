'use client'
import React from 'react'
import addToDo from '@/server-actions/ToDo/addToDo'
import { useInputField } from '@/store/ToDo/toDo'
import { Button } from '@/components/ui/button'
import { InputDemo } from '@/components/Shared/InputDemo'
//can do this
// const getText = () => {//not recomended
//   const text = useInputField.getState().setText
//   useInputField.setState({ text: 'ttt' })
// }
export default function Nav() {
  const text: string = useInputField((state) => state.text)
  const setText = useInputField((state) => state.setText)
  function handelSubmit() {
    addToDo(text)
    setText('')
  }
  return (
    <div className="flex justify-evenly items-center py-5 w-3/4 mx-auto">
      <InputDemo placeHolder="To-DO" type="text"   />
      <Button onClick={handelSubmit}>{'Submit'}</Button>
    </div>
  )
}
