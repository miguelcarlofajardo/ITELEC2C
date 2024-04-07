import { useState } from "react";
function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    setName("");
    setQuantity(1);
    console.log(newItem);
    onAddItem(newItem);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="tasks"
          name="tasks"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a task."
        ></input>
        <button>I Got This!</button>
      </form>
    </div>
  );
}
export default Form;
