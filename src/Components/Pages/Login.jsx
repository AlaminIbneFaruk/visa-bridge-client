import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const emailref = useRef(null);
  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("You pressed Login!");
    console.log("Email:", email, "Password:", password);
    setErrorMessage("");
    setSuccess(false);
    // login code here
    signInUser(email, password)
      .then((userCredential) => {
        console.log("User:", userCredential.user);
        setSuccess(true);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error.code);
        console.log("Error:", error.message);
        setErrorMessage(`Error:${error.message}`);
      });
  };
  
  const handleGoogle = () => {
    signInGoogle()
      .then(result =>{
        console.log(result.user)
        // navigate('/')
      }).catch(error=>{
        console.log(error.message)
      })
  }
  const [text] = useTypewriter({
    words: [`"WELCOME TO VISA BRIDGE"`, 'LOGIN NOW'],
    loop: Infinity,
  })

  return (
    <div className="py-8">
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
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
              placeholder="email"
              className="input input-bordered"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label" >
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2 gap-5">
            <button className="btn btn-secondary" type="submit">
              Login
            </button>
            <Link to="/register" className="btn btn-secondary text-white">
              Register Now
            </Link>
          </div>
          <button
            className="btn bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleGoogle}
          >
            <FaGoogle className="text-2xl" />
            <span className="text-3xl">Google</span>
          </button>
          <div>
            <p className={errorMessage ? `text-red-500` : `text-green-600`}>
              {errorMessage
                ? `${errorMessage}`
                : `${success ? `Logged in Successfull` : ""}`}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
