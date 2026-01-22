import { useState } from "react";
import ToDoList from "./ToDoList";

function ToDo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (value) => {
    const cleaned = String(value).trim();
    if (!cleaned) return;
    setItems((prev) => [...prev, cleaned]);
    setInput("");
  };

  const onInputChange = (e) => setInput(e.target.value);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem(input);
    }
  };

  return (
    <>
      <input onChange={onInputChange} value={input} onKeyDown={onKeyDown} />
      <ul>
        {items.map((element, idx) => (
          <ToDoList key={idx} element={element} />
        ))}
      </ul>
      <button onClick={() => addItem(input)}>Add ToDo</button>
    </>
  );
}

export default ToDo;
