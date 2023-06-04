import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import FilterTasks from "./components/FilterTasks";
import TaskList from "./components/TaskList";

function App() {
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
        <Route path='/' element={<TaskList />} />
        <Route path='/filter' element={<FilterTasks />} />
      </Routes>
    </>
  );
}

export default App;
