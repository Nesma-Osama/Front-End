"use client"
import React, { useState } from 'react'
import Avatar from './Avatar'
import { useRouter } from 'next/navigation'
import { handelLogin } from '@/lib/userFetchers'
function Form() {
    const [avatarId, setAvatarId] = useState<string>((Math.random() * 20).toFixed())
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function hadelSubmit(e: any) {
        handelLogin(e, router, avatarId)
    }
    return (
        <div>
            <form className="flex flex-col gap-5" onSubmit={(e) => hadelSubmit(e)}>
                <Avatar avatarId={avatarId} setAvatarId={setAvatarId} />
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div className='form-control w-full '>
                        <div className="label">
                            <span className="label-text text-lg">What is your name?</span>
                        </div>
                        <input type="text" placeholder="Username" className="input input-bordered  " required />
                    </div>
                    <div className='form-control  w-full'>
                        <div className="label">
                            <span className="label-text text-lg">What is your email?</span>
                        </div>
                        <input type="email" placeholder="Email" className="input input-bordered w-full " required />
                    </div>
                </div>
                <button className='btn btn-lg'>Login</button>
            </form>
        </div>
    )
}

export default Form
