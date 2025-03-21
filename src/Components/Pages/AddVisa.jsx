import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: ["ADD VISA"],
    loop: Infinity,
  });

  const [visaDetails, setVisaDetails] = useState({
    countryImage: "",
    country: "",
    visaType: "",
    processingTime: "",
    fee: "",
    validity: "",
    required_documents: [], 
    description: "",
    Age_restriction: "", 
    Application_method: "", 
    user: {
      uid: user?.uid || "",
      email: user?.email || "",
      username: user?.displayName || "",
      photo: user?.photoURL || "",
    },
    created_at: new Date().toISOString(),
  });

  // Update user in state if it changes (e.g., after login)
  useEffect(() => {
    setVisaDetails((prev) => ({
      ...prev,
      user: {
        uid: user?.uid || "",
        email: user?.email || "",
        username: user?.displayName || "",
        photo: user?.photoURL || "",
      },
    }));
  }, [user]);

  // Redirect to login if not authenticated (private route)
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setVisaDetails((prevDetails) => ({
        ...prevDetails,
        required_documents: checked
          ? [...prevDetails.required_documents, value]
          : prevDetails.required_documents.filter((file) => file !== value),
      }));
    } else {
      setVisaDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extra validation: Ensure at least one document is selected
    if (visaDetails.required_documents.length === 0) {
      toast.error("Please select at least one required document.", {
        position: "top-right",
      });
      return;
    }

    // Convert fee and Age_restriction to numbers before sending
    const payload = {
      ...visaDetails,
      fee: Number(visaDetails.fee),
      Age_restriction: Number(visaDetails.Age_restriction),
      created_at: new Date().toISOString(), // Fresh timestamp
    };

    // Check if conversion resulted in valid numbers
    if (isNaN(payload.fee)) {
      toast.error("Fee must be a valid number.", { position: "top-right" });
      return;
    }
    if (isNaN(payload.Age_restriction)) {
      toast.error("Age restriction must be a valid number.", {
        position: "top-right",
      });
      return;
    }

    try {
      const response = await fetch("https://sunflower-assignment-server.vercel.app/add-visas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.status === "success") {
        toast.success(data.message, { position: "top-right" });
        // Reset form with consistent initial values
        setVisaDetails({
          countryImage: "",
          country: "",
          visaType: "",
          processingTime: "",
          fee: "",
          validity: "",
          required_documents: [],
          description: "",
          Age_restriction: "",
          Application_method: "",
          user: {
            uid: user?.uid || "",
            email: user?.email || "",
            username: user?.displayName || "",
            photo: user?.photoURL || "",
          },
          created_at: new Date().toISOString(),
        });
      } else {
        toast.error(data.message, { position: "top-right" });
      }
    } catch (error) {
      toast.error(`Failed to connect to the server: ${error.message}`, {
        position: "top-right",
      });
    }
  };

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div>
      <div className="hero bg-gradient-to-tr from-blue-500 via-sky-400 to-blue-500 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left bg-white w-full p-4 rounded-2xl">
            <h1 className="text-5xl font-bold text-black mx-auto text-center">
              {text}
              <Cursor cursorColor="Blue" />
            </h1>
            <p className="py-6 text-xl font-bold">
              Fill in the details below to add a new visa?.
            </p>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Country Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="countryImage"
                  placeholder="Country Image URL"
                  className="input input-bordered"
                  value={visaDetails.countryImage}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Country</span>
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="input input-bordered"
                  value={visaDetails.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Visa Type</span>
                </label>
                <select
                  name="visaType"
                  className="select select-bordered"
                  value={visaDetails.visaType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Visa Type
                  </option>
                  <option value="Tourist">Tourist Visa</option>
                  <option value="Student">Student Visa</option>
                  <option value="Work">Work Visa</option>
                  <option value="Transit">Transit Visa</option>
                  <option value="Business">Business Visa</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Processing Time
                  </span>
                </label>
                <input
                  type="text"
                  name="processingTime"
                  placeholder="e.g., 10 days"
                  className="input input-bordered"
                  value={visaDetails.processingTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Required Documents
                  </span>
                </label>
                {[
                  "Valid passport",
                  "Visa application form",
                  "Passport-sized photograph",
                  "Recent utility bill",
                ].map((file) => (
                  <label className="cursor-pointer label" key={file}>
                    <input
                      type="checkbox"
                      name="required_documents"
                      value={file}
                      className="checkbox checkbox-info"
                      checked={visaDetails.required_documents.includes(file)}
                      onChange={handleChange}
                    />
                    <span className="label-text">{file}</span>
                  </label>
                ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Visa description"
                  className="input input-bordered"
                  value={visaDetails.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Age Restriction</span>
                </label>
                <input
                  type="number"
                  name="Age_restriction"
                  placeholder="Minimum age"
                  className="input input-bordered"
                  value={visaDetails.Age_restriction}
                  onChange={handleChange}
                  max="80"
                  min="14"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Fee</span>
                </label>
                <input
                  type="number"
                  name="fee"
                  placeholder="Visa fee"
                  className="input input-bordered"
                  value={visaDetails.fee}
                  onChange={handleChange}
                  max="1000000"
                  min="10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Validity</span>
                </label>
                <input
                  type="text"
                  name="validity"
                  placeholder="e.g., 90 months"
                  className="input input-bordered"
                  value={visaDetails.validity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Application Method
                  </span>
                </label>
                <select
                  name="Application_method"
                  className="select select-bordered"
                  value={visaDetails.Application_method}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Application Method
                  </option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info" type="submit">
                  Add Visa
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisa;