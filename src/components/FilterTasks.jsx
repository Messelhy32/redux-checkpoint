/* eslint-disable react/prop-types */
import { useState } from "react";
import Task from "./Task";

function FilterTasks({ todos }) {
  const [isDone, setIsDone] = useState(false); // Fix: Correct usage of useState hook
  const NotDoneList = todos.filter((task) => task.completed === false);
  const DoneList = todos.filter((task) => task.completed === true);

  const handleDone = () => {
    setIsDone(true);
  };
  const handleNotDone = () => {
    setIsDone(false);
  };

  return (
    <>
      <div className='m-auto text-center'>
        <button
          className='rounded-md bg-green-700 p-2 text-slate-100 ease-in-out duration-300 hover:bg-green-800 mr-3'
          onClick={handleNotDone}>
          Done List
        </button>
        <button
          className='rounded-md bg-slate-500 p-2 text-slate-100 ease-in-out duration-300 hover:bg-slate-800'
          onClick={handleDone}>
          Not Done Yet List
        </button>
      </div>
      <ul>
        {isDone
          ? NotDoneList.map((todo, i) => (
              <div key={i} className='flex justify-between w-7/12 m-auto my-10'>
                <Task todo={todo} key={todo.id} />
              </div>
            ))
          : DoneList.map((todo, i) => (
              <div key={i} className='flex justify-between w-7/12 m-auto my-10'>
                <Task todo={todo} key={todo.id} />
              </div>
            ))}
      </ul>
    </>
  );
}

export default FilterTasks;
