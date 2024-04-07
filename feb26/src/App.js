import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Form from "./Form";
import List from "./List";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((toBeDelItems) => toBeDelItems.filter((item) => item.id !== id));
  }
  function checkItem(theArray) {
    const updatedItems = items.map((item) => {
      if (item.id === theArray) {
        return { ...item, isChecked: true };
      }
      return item;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  }
  return (
    <div className="App">
      <Header />
      <Form onAddItem={handleAddItems} />
      <List items={items} onDeleteItem={deleteItem} onCheckItem={checkItem} />
    </div>
  );
}
export default App;
