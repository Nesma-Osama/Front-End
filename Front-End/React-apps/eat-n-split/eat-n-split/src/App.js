import { useState } from "react";
import SlideBar from "./components/SideBar";
import SplitBill from "./components/SplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isAddFriend, setIsAddFriend] = useState(false)

  function handleAddFriend(name, image) {
    const id = (new Date()).getTime()
    const newFriend = { name: name, image: image, balance: 0, id: id }
    setFriends(friends => [...friends, newFriend])
  }
  function handleUpdateFriend(id, balance) {

    setFriends(friends => friends.map(friend => friend.id === id ? {
      ...friend,
      balance: balance+friend.balance
    } : friend))
  }
  return (
    <div className="app">
      <SlideBar friends={friends} onAddFriend={handleAddFriend} selectedItem={selectedItem} setSelectedItem={setSelectedItem} isAddFriend={isAddFriend} setIsAddFriend={setIsAddFriend} />
      {selectedItem && !isAddFriend && <SplitBill selectedItem={selectedItem} onUpdateFriend={handleUpdateFriend} setSelectedItem={setSelectedItem}/>}

    </div>
  )
}