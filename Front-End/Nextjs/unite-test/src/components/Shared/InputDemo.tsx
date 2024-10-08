"use client"
import { Input } from "@/components/ui/input"
import { useInputField } from "@/store/ToDo/toDo"

export function InputDemo({  placeHolder ,type}: {  type:string,placeHolder: string }) {
  const text: string = useInputField((state) => state.text)
  const setText = useInputField((state) => state.setText)
  return <Input type={type} placeholder={placeHolder} value={text} onChange={(e)=>setText(e.target.value)}/>
}
