import { useState } from "react";

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
  const [addFriend, setAddFriend] = useState(false);

  function handleSetFriend() {
    setAddFriend((addFriend) => !addFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {addFriend && <FormAddFriend />}
        <Button onSetAddFriend={handleSetFriend}>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function Button({ children, onSetAddFriend }) {
  return (
    <button onClick={onSetAddFriend} className="button">
      {children}
    </button>
  );
}

function FriendsList() {
  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Friend({ item }) {
  return (
    <li>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} {item.balance}$
        </p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owes you ${item.balance}
        </p>
      )}
      {item.balance === 0 && (
        <p className="grey">You and {item.name} are even</p>
      )}
      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <>
      <form action="" className="form-add-friend">
        <label htmlFor="">👨‍🤝‍👨🏾Friend name</label>
        <input type="text" />

        <label htmlFor=""> 🖼 Image URL</label>
        <input type="text" />

        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="">💰 Bill value</label>
      <input type="text" />

      <label htmlFor="">👩 Your expense</label>
      <input type="text" />

      <label htmlFor="">👨 X's expense</label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Who is paying the bill?</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
