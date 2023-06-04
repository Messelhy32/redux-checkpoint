import { useDispatch } from "react-redux";
import { DoneTodo } from "../store/reducers/TodoListReducer";

/* eslint-disable react/prop-types */
function Task({ todo }) {
  const dispatch = useDispatch();
  const handleDone = (todo) => {
    dispatch(DoneTodo(todo));
  };

  return (
    <>
      <li className={todo.completed ? "line-through" : ""} key={todo.id}>
        {todo.title}
      </li>
      <button
        onClick={() => handleDone(todo)}
        className={
          todo.completed
            ? "rounded-md bg-slate-500 p-2 text-slate-100 ease-in-out duration-300 hover:bg-slate-800"
            : "rounded-md bg-green-700 p-2 text-slate-100 ease-in-out duration-300 hover:bg-green-800"
        }
      >
        {todo.completed ? "Remove" : "Done"}
      </button>
    </>
  );
}

export default Task;
