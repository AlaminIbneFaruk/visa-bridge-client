import { Outlet } from "react-router-dom";

const Bg = () => {
  return (
    <div
      className={`bg-base-100"`}
    >
      <Outlet />
    </div>
  );
};

export default Bg;
