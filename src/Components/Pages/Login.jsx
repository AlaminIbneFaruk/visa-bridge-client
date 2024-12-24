import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/register" className="btn btn-secondary text-white">
        Register Now
      </Link>
      This is Login!!
    </div>
  );
};

export default Login;