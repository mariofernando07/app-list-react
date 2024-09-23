import { createContext, useEffect } from "react";
import "./App.css";
import Items from "./Items";
import useList from "./UseList";
const ListContext = createContext()

function App() {
  const [items, listDispatch] = useList([])

  useEffect(() => {
    console.log(items)
  }, [items])

  function addItem() {
    listDispatch({ type: 'ADD'})
  }

  return (
    <>
      <button onClick={addItem}>Add item</button>
      <ListContext.Provider value={[ listDispatch ]}>
        <Items items={items} />
      </ListContext.Provider>
    </>
  );
}

export { App, ListContext };
