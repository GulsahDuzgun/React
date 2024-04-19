import { useState } from "react";
import "./index.css";

export default function App() {
  const [list, setItemList] = useState([]);

  function handleAddItems(item) {
    setItemList((list) => [...list, item]);
  }

  function handleDeleteItem(id) {
    setItemList((list) => list.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItemList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={list}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats itemList={list} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //guard

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (item, indx) => (
          <option key={indx} value={indx + 1}>
            {indx + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            itemData={item}
            onToggleItem={onToggleItem}
            key={item.id}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemData, onDeleteItem, onToggleItem }) {
  const abc = () => onDeleteItem(itemData.id);
  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        value={itemData.packed}
        onChange={() => onToggleItem(itemData.id)}
      />
      <span style={itemData.packed ? { textDecoration: "line-through" } : {}}>
        {itemData.quantity} {itemData.description}
      </span>
      <button onClick={abc}>❌</button>
    </li>
  );
}

function Stats({ itemList }) {
  const numItems = itemList.length;
  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📢</em>
      </p>
    );

  const numPackedItems = itemList.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go ✈`
          : `💼 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
