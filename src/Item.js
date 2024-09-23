import { useEffect, useRef, useState } from "react";
import "./Item.css";
function Item({ name, setItems, index }) {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  function onInputChange(event) {
    setText(event.target.value.trim());
  }

  function onInputBlur(event) {
    setItems((items) => {
      if(text.length) {
        items[index] = event.target.value;
      }
      return [...items];
    });
    modify();
  }

  function modify() {
    setModifyOn(!modifyOn);
  }

  function remove() {
    setItems((items) => items.filter((_item, i) => i !== index));
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
