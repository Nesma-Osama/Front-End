/* eslint-disable @typescript-eslint/no-explicit-any */
import { userState, usersState } from "@/types"
import { create } from "zustand"
export const useUser = create<userState>((set) => ({
    myUser: undefined,
    setUser: (userData) =>
        set((state) => {
            // Only update if user data is different
            if (state.myUser?._id !== userData._id || state.myUser === undefined) {
                return { myUser: userData }
            }
            return state // Prevent unnecessary updates
        }),
}))
export const useUsers = create<usersState>((set) => ({
    myUsers: undefined,
    setUsers: (users: any) => {
        set(() => {
            return {
                myUsers: users,
            }
        })
    },
}))
