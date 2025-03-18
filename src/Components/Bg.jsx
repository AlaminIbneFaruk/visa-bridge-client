import { Outlet } from "react-router-dom";


const Bg = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-sky-400 to-white">
      <Outlet/>
    </div>
  );
};

export default Bg;