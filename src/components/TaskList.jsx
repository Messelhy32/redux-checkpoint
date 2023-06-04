import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/actions/fetchTodos";
import AddTask from "./AddTask";
import Task from "./Task";

function TaskList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <AddTask todos={todos} />
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={i} className='flex justify-between w-7/12 m-auto my-10'>
              <Task todo={todo} key={todo.id} />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;
