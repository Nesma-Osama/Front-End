import { create } from 'zustand'
import { InputFiled } from '@/types/Shared/Shared'
export const useInputField = create<InputFiled>((set) => ({
  text: '',
  setText: (text) => {
    set({ text: text })
  },
}))
