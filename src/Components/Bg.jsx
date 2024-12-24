import { Outlet } from "react-router-dom";


const Bg = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500">
      <Outlet/>
    </div>
  );
};

export default Bg;