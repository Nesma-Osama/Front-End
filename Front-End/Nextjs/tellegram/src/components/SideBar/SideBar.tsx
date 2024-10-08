"use client"
import { fetchUser } from '@/lib/userFetchers'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useUser } from '@/store/userStore'
import SearchBar from './SearchBar'
import ChatList from './ChatList'
function SideBar() {
  const [cookie, setCookie] = useCookies(["user"])
  const myUser = useUser((state) => state.myUser)
  const setUser = useUser((state) => state.setUser)
  useEffect(() => {
    fetchUser(cookie, setUser)

  }, [cookie.user])
  return (
    <div className='w-full  md:!block sidebar z-10 border-r-2 border-stone-400 md:w-1/2 lg:w-1/3 p-3 dark:bg-white bg-black min-h-screen'>
      <SearchBar user={myUser} />
      {myUser && <ChatList mySelf={myUser} />}
    </div>
  )
}

export default SideBar
