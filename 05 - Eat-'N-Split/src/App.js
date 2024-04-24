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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSetAddFriend() {
    setAddFriend((addFriend) => !addFriend);
  }

  function handleSetFriends(friend) {
    setFriends((fList) => [...fList, friend]);
    setAddFriend(false);
  }

  function handleSetSelectedFriend(friend) {
    setSelectedFriend((currentEl) =>
      currentEl?.id === friend.id ? null : friend
    );
    setAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((fList) =>
      fList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSetSelectedFriend={handleSetSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {addFriend && <FormAddFriend onSetFriends={handleSetFriends} />}
        <Button handleClick={handleSetAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onHandleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className="button">
      {children}
    </button>
  );
}

function FriendsList({ friends, onSetSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((item) => (
        <Friend
          item={item}
          key={item.id}
          onSetSelectedFriend={onSetSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ item, onSetSelectedFriend, selectedFriend }) {
  const currEl = selectedFriend?.id === item.id;
  return (
    <li className={currEl ? "selected" : ""}>
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
      <Button handleClick={() => onSetSelectedFriend(item)}>
        {currEl ? "Close" : "Select"}
      </Button>
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

function FormSplitBill({ selectedFriend, onHandleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriends = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    const payment = whoIsPaying === "user" ? paidByFriends : -paidByUser;
    onHandleSplitBill(payment);
  }
  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="">👩 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="">👨 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriends} />

      <label htmlFor="">🤑 Who is paying the bill?</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
