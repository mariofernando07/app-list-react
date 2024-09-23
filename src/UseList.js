import { useReducer, useState } from "react";

function useList(list) {
  const [key, setKey] = useState(1);
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD":
        setKey(key + 1);
        return ([
          ...state,
          {
            key,
            name: `Item ${key}`,
          },
        ]);
      case "UPDATE":
        return state.map((item) => {
          const { key, name } = action.payload;
          if (item.key === key) item.name = name;
          return item;
        });
      case "REMOVE":
        return state.filter((item) => item.key !== action.key);
      default:
        return state;
    }
  }, list);
  return [state, dispatch];
}
export default useList;
