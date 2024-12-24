import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
      <div className="py-8">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Name</span>
              </label>
              <input type="text" placeholder="Full Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base

">Email</span>
              </label>
              <input type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base

">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base

">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-2 gap-5">
              <button type="submit" className="btn btn-secondary">Register</button>
              <Link to="/login" className="btn btn-secondary text-white">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;