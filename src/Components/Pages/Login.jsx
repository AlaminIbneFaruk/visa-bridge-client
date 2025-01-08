import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const email = form.email.value; 
    const password = form.password.value;
    console.log("You pressed Login!");
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="py-8">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2 gap-5">
            <button className="btn btn-secondary" type="submit">Login</button>
            <Link to="/register" className="btn btn-secondary text-white">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
