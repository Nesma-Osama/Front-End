"use client"
import React from 'react'
import Image from 'next/image'
import { AvatarProps } from "@/types"
function Avatar({ avatarId, setAvatarId }: AvatarProps) {
    return (
        <div className='avatar mx-auto mb-5 tooltip cursor-pointer' data-tip="Click to regenerate avatar" onClick={() => setAvatarId((Math.random() * 20).toFixed())} >
            <div className='w-24  ring ring-primary ring-offset-base-100 rounded-full ring-offset-2 overflow-hidden'>
                <Image src={`https://robohash.org/${avatarId}.png`} width={256} height={256} alt="Avatar" />
            </div>
        </div>
    )
}

export default Avatar
