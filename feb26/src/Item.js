import { useState } from "react";
function Item({ itemObj, deleteItem, checkItem }) {
  return (
    <div className="itemItem">
      <h2>
        {itemObj.quantity} {itemObj.name}
        <input
          type="image"
          id="trashBtn"
          className="itemBtn"
          src="../trashIcon.png"
          alt="Discard"
          onClick={() => deleteItem(itemObj.id)}
        ></input>
        <input
          type="image"
          id="completedBtn"
          className="itemBtn"
          src="../checkIcon.png"
          alt="Check"
          onClick={() => checkItem(itemObj.id, itemObj)}
        ></input>
      </h2>
    </div>
  );
}
export default Item;
