/* eslint-disable react/prop-types */
import AddTask from "./AddTask";
import Task from "./Task";

function TaskList({ todos }) {
  return (
    <>
      <AddTask todos={todos} />
      <ul>
        {todos.map((todo, i) => {
          return (
            <div key={i} className='text-center w-7/12 m-auto my-10'>
              <Task todo={todo} key={todo.id} />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;
