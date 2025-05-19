import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailref = useRef(null);
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await signInUser(email, password);
      const userEmail = userCredential.user.email;
      toast.success("Logged in successfully!");
      form.reset();

      setTimeout(() => {
        if (userEmail === "hridoy@example.com") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 2000);
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(`Error: Error logging in! ${error.message}`);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInGoogle();
      const userEmail = result.user.email;
      toast.success("Logged in Successfully with Google!");

      setTimeout(() => {
        if (userEmail === "durjoy@gmail.com") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 2000);
    } catch (error) {
      console.error(error.message);
      toast.error(`Error: Error logging in! ${error.message}`);
    }
  };

  const [text] = useTypewriter({
    words: ["WELCOME TO VISA BRIDGE", "LOGIN NOW"],
    loop: Infinity,
  });

  return (
    <div className="py-8">
      <Helmet>
        <title>Login | Visa Bridge</title>
        <meta name="description" content="Login to Visa Bridge and access exclusive travel features." />
      </Helmet>

      <div className="card w-full max-w-sm mx-auto shrink-0 shadow-2xl bg-base-100/60 backdrop-blur-md text-neutral-content border border-white/20">
        <div className="text-center font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent pt-5 text-2xl mx-auto">
          {text}
        </div>
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              name="email"
              ref={emailref}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white/40 backdrop-blur-md text-neutral-content"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered bg-white/40 backdrop-blur-md text-neutral-content"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2 gap-5">
            <button className="btn text-primary btn-primary glass hover:text-neutral" type="submit">
              Login
            </button>
            <Link to="/register" className="btn btn-outline btn-primary text-neutral glass">
              Register Now
            </Link>
          </div>
          <button
            type="button"
            className="btn bg-blue-500 text-white hover:bg-blue-600 glass"
            onClick={handleGoogle}
          >
            <FaGoogle className="text-2xl" />
            <span className="text-3xl">Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
