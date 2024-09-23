import { useContext, useEffect, useRef, useState } from "react";
import "./Item.css";
import { ListContext } from "./App";
function Item({ name, index }) {
  const [dispatchList] = useContext(ListContext);
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [modifyOn]);

  function onInputChange(event) {
    setText(event.target.value);
  }

  function onInputBlur(event) {
    dispatchList({
      type: 'UPDATE', payload: {
        key: index,
        name: event.target.value.trim()
      }
    })
    modify();
  }

  function modify() {
    setModifyOn(!modifyOn);
  }

  function remove() {
    dispatchList({ type: 'REMOVE', key: index })
  }

  return (
    <li className="item-container">
      {modifyOn ? (
        <input
          ref={inputRef}
          value={text}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
      ) : (
        <span>{name}</span>
      )}
      <button onClick={modify}>Modify</button>
      <button onClick={remove}>Remove</button>
    </li>
  );
}
export default Item;
