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
  const [friends, setFriends] = useState(initialFriends);

  function handleSetAddFriend() {
    setAddFriend((addFriend) => !addFriend);
  }

  function handleSetFriends(friend) {
    setFriends((fList) => [...fList, friend]);
    setAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {addFriend && <FormAddFriend onSetFriends={handleSetFriends} />}
        <Button onSetAddFriend={handleSetAddFriend}>Add Friend</Button>
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

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((item) => (
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

function FormAddFriend({ onSetFriends }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  function handleClick(e) {
    e.preventDefault();

    if (!name || !img) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${img}?u=${id}`,
      balance: 0,
    };
    onSetFriends(newFriend);
  }

  return (
    <>
      <form action="" className="form-add-friend" onSubmit={handleClick}>
        <label htmlFor="">👨‍🤝‍👨🏾Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor=""> 🖼 Image URL</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

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
