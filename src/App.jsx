import { Outlet } from "react-router-dom";
// import Home from "./components/Home/Home";


const App = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center bg-slate-500'>Next-Page</h1>
      <Outlet/>
    </div>
  );
};

export default App;