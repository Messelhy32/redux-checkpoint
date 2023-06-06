import { useState } from "react";
import { useDispatch } from "react-redux";
import { DoneTodo, EditTodo } from "../store/reducers/TodoListReducer";

/* eslint-disable react/prop-types */
function Task({ todo }) {
  const [edit, setEdit] = useState(false);
  const [tt, setTt] = useState(todo.title);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const dispatch = useDispatch();
  const handleDone = (todo) => {
    dispatch(DoneTodo(todo));
  };
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleConfirm = (title, task) => {
    setTodoTitle(tt);
    dispatch(EditTodo({ title, task }));
    setEdit(false);
  };
  return (
    <>
      <li className={todo.completed ? "line-through" : ""} key={todo.id}>
        {todoTitle}
      </li>
      <button
        onClick={() => handleDone(todo)}
        className={
          todo.completed
            ? "rounded-md bg-slate-500 p-2 text-slate-100 ease-in-out duration-300 hover:bg-slate-800 mr-2"
            : "rounded-md bg-green-700 p-2 text-slate-100 ease-in-out duration-300 hover:bg-green-800 mr-2"
        }>
        {todo.completed ? "Remove" : "Done"}
      </button>
      <button
        onClick={handleEdit}
        className='rounded-md bg-slate-500 p-2 text-slate-100 ease-in-out duration-300 hover:bg-slate-800'>
        {!edit ? "Edit" : "x"}
      </button>
      <div className='block'>
        {edit && (
          <>
            <input
              type='text'
              className='border border-slate-400 px-1 mr-2'
              value={tt}
              name='todo-title'
              onChange={(e) => setTt(e.target.value)}
            />
            <button
              onClick={() => handleConfirm(tt, todo)}
              className='rounded-md bg-green-700 p-2 text-slate-100 ease-in-out duration-300 hover:bg-green-800 mr-2'>
              confirm
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Task;
