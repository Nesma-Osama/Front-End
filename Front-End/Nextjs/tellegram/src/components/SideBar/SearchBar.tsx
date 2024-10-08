import { userProps } from '@/types'
import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@/utils/icons'
function SearchBar({ user }: { user: userProps }) {
    return (
        <div className='flex gap-4'>
            <div className="avatar online">
                <div className="w-12 ring-primary ring-offset-base-100 rounded-full ring ring-offset-1">
                    <Image src={user?.imageId || ""} width={256} height={256} alt="Avatar" />
                </div>
            </div>
            <div className='w-full sm:w-2/3 relative'>
                <input type="text" placeholder="Search" className="input input-bordered w-full dark:bg-black bg-white  rounded-full dark:text-white text-white  pl-9" />
                <div className='w-6 h-6 absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 '>
                    <SearchIcon />
                </div>
            </div>

        </div>
    )
}

export default SearchBar
