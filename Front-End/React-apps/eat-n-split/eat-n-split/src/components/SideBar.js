import { useState } from "react"
import Friend from "./Friend"
import FormAddFriend from "./FormAddFriend"
export default function SideBar({ friends, onAddFriend, selectedItem, setSelectedItem ,isAddFriend,setIsAddFriend}) {
    return (
        <div className="sidebar">
            <ul>
                {friends.map(friend => <Friend friend={friend} selectedItem={selectedItem} setSelectedItem={setSelectedItem} key={friend.id} />
                )}
            </ul>
            {isAddFriend ? <FormAddFriend onAddFriend={onAddFriend} setIsAddFriend={setIsAddFriend} /> : null}
            <div className="button" onClick={() => setIsAddFriend(isAddFriend => !isAddFriend)}>
                {!isAddFriend ? "Add Friend" : "Close"}
            </div>
        </div >
    )
}