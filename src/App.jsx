import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterTasks from "./components/FilterTasks";
import TaskList from "./components/TaskList";
import { fetchTodos } from "./store/actions/fetchTodos";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className='m-auto text-center my-4'>
        <Link
          className='rounded-md border-slate-800 border duration-300 mr-3 p-2'
          to='/'>
          Home
        </Link>
        <Link
          className='rounded-md border-slate-800 border duration-300 p-2'
          to='/filter'>
          Filtered Tasks
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<TaskList todos={todos} />} />
        <Route path='/filter' element={<FilterTasks todos={todos} />} />
      </Routes>
    </>
  );
}

export default App;
