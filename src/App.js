import { useEffect, useState } from "react";
import "./App.css";
import Items from "./Items";

function App() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState(1);

  useEffect(() => {
    console.log(items)
  }, [items])

  function addItem() {
    const name = `Item ${key}`;
    setKey(key + 1);
    setItems((value) => [...value, { name, key }]);
  }

  return (
    <>
      <button onClick={addItem}>Add item</button>
      <Items items={items} setItems={setItems} />
    </>
  );
}

export default App;
