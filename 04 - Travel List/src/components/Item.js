export default function Item({ itemData, onDeleteItem, onToggleItem }) {
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
