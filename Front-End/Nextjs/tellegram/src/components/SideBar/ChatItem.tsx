import { userProps } from '@/types'
import React from 'react'
import Image from 'next/image'
function ChatItem({ user }: { user: userProps }) {
    return (
        <>
            <li className='flex gap-3 cursor-pointer hover:bg-slate-300 p-5 rounded-lg'>
                <div className="avatar online">
                    <div className="w-12 ring-primary ring-offset-base-100 rounded-full ring ring-offset-1">
                        <Image src={user.imageId || ""} width={256} height={256} alt="Avatar" />
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='font-semibold text-xl dark:text-black text-white'>{user?.name}</h3>
                    <p>user has joined</p>
                </div>
            </li>
            <div className='divider my-0'></div>
        </>
    )
}

export default ChatItem
