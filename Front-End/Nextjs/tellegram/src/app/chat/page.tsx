import React from 'react'
import SideBar from '@/components/SideBar/SideBar'
import Messages from '@/components/Chat-Messages/Messages'
function Chat() {
    return (
        <div className='min-h-screen min-w-[333px]'>
            <div className='flex mx-auto '>
                <SideBar />
                <Messages/>
            </div>
        </div>
    )
}

export default Chat
