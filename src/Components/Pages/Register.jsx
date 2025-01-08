import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("You pressed Register!!!");
    const e_mail = event.target.email.value;
    console.log(
      event.target.email.value,
      event.target.password.value,
      event.target.Cpassword.value
    );
    const password = event.target.password.value;
    const cpassword = event.target.Cpassword.value;
    const terms = event.target.terms.checked;
    console.log(e_mail, cpassword, password);
    if (!terms) {
      setErrorMessage("Please accept the terms and conditions");
      setSuccess(false);
      return;
    }
    setErrorMessage("");
    setSuccess(false);
    const regEX =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regEX.test(cpassword)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      setSuccess(false);
      return;
    }
    createUserWithEmailAndPassword(auth, e_mail, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMessage(error.message);
      });
  };
  const showHidePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="py-8">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? `text` : `password`}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <button
                className="btn btn-xs absolute right-4 top-12"
                onClick={showHidePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base">Confirm Password</span>
              </label>
              <input
                name="Cpassword"
                type={showPassword ? `text` : `password`}
                placeholder="Confirm Password"
                className="input input-bordered"
                required
              />
              <button
                className="btn btn-xs absolute right-4 top-12"
                onClick={showHidePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input name="terms" type="checkbox" className="checkbox" value="Accepted" />
                <label className="label-text" >Accept all the terms and conditions</label>
              </label>
            </div>
            <div className="form-control mt-2 gap-5">
              <button type="submit" className="btn btn-secondary">
                Register
              </button>
              <Link to="/login" className="btn btn-secondary text-white">
                Already have an account? Login
              </Link>
            </div>
            <p className="text-red-700 p-2 rounded-lg">{errorMessage}</p>
            {success && <p className="text-green-600">Sign Up is Successful</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
