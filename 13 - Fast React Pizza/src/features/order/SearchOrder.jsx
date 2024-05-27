import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${id}`);
    setId("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type the order's id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSubmit}>Fetch</button>
    </form>
  );
}
