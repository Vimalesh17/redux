import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,deleteTodo } from "./todoSlice";

export default function TodoList() {
  const [todos, setTodo] = useState("");
  const item = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  function handlechange(e) {
    const data = e.target.value;
    setTodo(data);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <input type="text" onChange={handlechange} />
      <button onClick={() => dispatch(addTodo(todos))}>Add Todo</button>
      <ul>
        {item?.map((element,index) => {
          return (
            <li>
              {element}{" "}
              <span>
                <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
