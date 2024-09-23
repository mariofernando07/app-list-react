import { useState } from "react";
import "./App.css";
import Items from "./Items";

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    console.log(items);
    setItems((value) => [...value, `Item ${items.length + 1}`]);
  }

  return (
    <>
      <button onClick={addItem}>Add item</button>
      <Items items={items} setItems={setItems}/>
    </>
  );
}

export default App;
