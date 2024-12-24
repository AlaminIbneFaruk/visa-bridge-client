import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-8">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2 gap-5">
          <button className="btn btn-secondary">Login</button>
          <Link to="/register" className="btn btn-secondary text-white">
            Register Now
          </Link>
        </div>
      </form>
    </div>
      This is Login!!
    </div>
  );
};

export default Login;