import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useTypewriter } from 'react-simple-typewriter';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const e_mail = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const cpassword = form.Cpassword.value;
    const terms = form.terms.checked;
    if(password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!terms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    const regEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regEX.test(cpassword)) {
      toast.error("Password must contain uppercase, lowercase, number & special character.");
      return;
    }

    try {
      const result = await createUser(e_mail, cpassword);
      console.log(result.user);
      await updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
      toast.success("Registration successful! Redirecting...");
      form.reset();
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [text] = useTypewriter({ words: ['WELCOME TO VISA BRIDGE', 'REGISTER NOW'], loop: Infinity });

  return (
    <div className="py-8">
      <div className="card w-full max-w-sm mx-auto shrink-0 shadow-2xl bg-base-100/60 backdrop-blur-md border border-white/20">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="text-center font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent text-2xl">
            {text}
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text text-base">Name</span></label>
            <input name="name" type="text" placeholder="Full Name" className="input input-bordered bg-white/60 backdrop-blur-md text-neutral-content" required />
            <label className="label"><span className="label-text text-base">Photo URL</span></label>
            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered bg-white/60 backdrop-blur-md text-neutral-content" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text text-base">Email</span></label>
            <input name="email" type="email" placeholder="Email" className="input input-bordered bg-white/60 backdrop-blur-md text-neutral-content" required />
          </div>
          {["password", "Cpassword"].map((field, idx) => (
            <div key={idx} className="form-control relative">
              <label className="label"><span className="label-text text-base">{field === "password" ? "Password" : "Confirm Password"}</span></label>
              <input name={field} type={showPassword ? "text" : "password"} placeholder={field} className="input input-bordered bg-white/40 backdrop-blur-md text-neutral-content" required />
              <button className="btn btn-xs absolute right-4 top-12" onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword); }}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          ))}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input name="terms" type="checkbox" className="checkbox" />
              <span className="label-text">Accept all the terms and conditions</span>
            </label>
          </div>
          <div className="form-control mt-2 gap-5">
            <button type="submit" className="btn text-primary btn-info glass hover:text-neutral">Register</button>
            <Link to="/login" className="btn btn-info btn-outline text-white glass">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
