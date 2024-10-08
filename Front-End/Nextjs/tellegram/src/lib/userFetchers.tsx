import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { userProps } from "@/types"
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchUser(
    cookie: { user?: any },
    setUser: (user: any) => void
) {
    const response = await fetch("/user", {
        headers: {
            Authorization: `${cookie.user}`,
        },
        method: "GET",
    })
    const user = await response.json()
    setUser(user[0])
}

export async function handelLogin(
    e: any,
    router: AppRouterInstance,
    avatarId: string
) {
    e.preventDefault()
    try {
        await fetch("/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: e.target[0].value,
                email: e.target[1].value,
                imageId: `https://robohash.org/${avatarId}.org`,
            }),
        })
        router.push("/chat")
    } catch (err) {
        console.log(err)
    }
}

export async function getAllUsers(
    myUser: userProps,
    setUsers: (users: any) => void
) {
    const response = await fetch("/users", {
        method: "GET",
    })
    const users: userProps[] | undefined = await response.json()

    const contactUsers = users?.filter((user) => user?._id !== myUser?._id)
    setUsers(contactUsers)
}
