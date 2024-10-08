//use state using Ts
import { useState } from "react";
type User = {
  id: number;
  name: string;
};
const users: User[] = [
  { id: 1, name: "nesma" },
  { id: 2, name: "nancy" },
];
export default function State() {
  const [user, setUser] = useState<User[]>(users); //This make state is an array of objects type user
  const [name, setName] = useState<string>("");
  // const [user,setUser]=useState<User[]|null>(null)//This make state is an array of objects type user or null
  // const [user,setUser]=useState<User>([])//This make state is an array of objects type user or null
  function handleAddUser() {
    const newUser: User = { name: name, id: new Date().getTime() };
    setUser((users) => [...users, newUser]);
    setName("");
  }
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add</button>
      <ul>
        {user.map((item) => (
          <li key={item.id}>{item.name.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}
