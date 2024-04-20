import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItemList([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={list}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats itemList={list} />
    </div>
  );
}
