import React, { useState } from "react";
import Item from "./Item";

function List({ items, onDeleteItem, onCheckItem, onEditItem }) {
  const [filter, setFilter] = useState("notCompleted");
  const [sortMethod, setSortMethod] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (method) => {
    if (sortMethod === method) {
      // Toggle sorting order if the same method is selected
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set new sorting method and default sorting order to ascending
      setSortMethod(method);
      setSortOrder("asc");
    }
  };

  // Sorting function by quantity
  const sortByQuantity = (a, b) => {
    if (sortOrder === "asc") {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  };

  // Sorting function by name
  const sortByName = (a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  };

  // Apply sorting based on the selected method
  const sortedItems = items
    .slice()
    .sort(sortMethod === "name" ? sortByName : sortByQuantity);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = sortedItems.filter((item) => {
    if (filter === "completed") {
      return item.isChecked;
    } else if (filter === "notCompleted") {
      return !item.isChecked;
    }
    return true; // Show all items
  });

  return (
    <div>
      <div className="dropdown-container">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="dropdown"
        >
          <option value="notCompleted">Not Completed</option>
          <option value="completed">Completed</option>
          <option value="all">All</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleSortChange("name")} className="sortButton">
          Sort by Name ({sortOrder === "asc" ? "A-Z" : "Z-A"})
        </button>
        <button
          onClick={() => handleSortChange("quantity")}
          className="sortButton"
        >
          Sort by Quantity ({sortOrder === "asc" ? "Low-High" : "High-Low"})
        </button>
      </div>

      <div className="itemsDiv">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            itemObj={item}
            deleteItem={onDeleteItem}
            checkItem={() => onCheckItem(item.id)} // Pass the item id to checkItem
            editItem={onEditItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
