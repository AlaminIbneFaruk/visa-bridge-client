import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const AddVisa = () => {
  const { user } = useContext(AuthContext);
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
    required_documents: "",
    description: "",
    Age_Restriction: "",
    Application_method: "",
    required_files: [],
    user:{
      uid: user?.uid,
      email: user?.email,
      username: user?.displayName,
      photo: user?.photoURL,
    },
    created_at: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setVisaDetails((prevDetails) => ({
        ...prevDetails,
        required_files: checked
          ? [...prevDetails.required_files, value]
          : prevDetails.required_files.filter((file) => file !== value),
      }));
    } else {
      setVisaDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visa Details:", visaDetails);

  };

  return (
    <div>
      <div className="hero bg-gradient-to-tr from-blue-500 via-sky-400 to-blue-500 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left bg-white w-full p-4 rounded-2xl">
            <h1 className="text-5xl font-bold text-black   mx-auto text-center">
              {text}
              <Cursor cursorColor="Blue" />
            </h1>
            <p className="py-6 text-xl font-bold">
              Fill in the details below to add a new visa.
            </p>
          </div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Country Image
                  </span>
                </label>
                <input
                  type="text"
                  name="countryImage"
                  placeholder="Country Image URL"
                  className="input input-bordered"
                  value={visaDetails.countryImage}
                  onChange={handleChange}
                  
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
                  placeholder="Processing Time"
                  className="input input-bordered"
                  value={visaDetails.processingTime}
                  onChange={handleChange}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Required Files
                  </span>
                </label>
                {["Valid passport", "Visa application form", "Passport sized photograph", "Electric bill of recent month"].map((file) => (
                  <label className="cursor-pointer label" key={file}>
                    <input
                      type="checkbox"
                      name="required_files"
                      value={file}
                      className="checkbox checkbox-info"
                      checked={visaDetails.required_files.includes(file)}
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
                  placeholder="Description"
                  className="input input-bordered"
                  value={visaDetails.description}
                  onChange={handleChange}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Age Restriction</span>
                </label>
                <input
                  type="number"
                  name="Age_Restriction"
                  placeholder="Age Restriction"
                  className="input input-bordered"
                  value={visaDetails.Age_Restriction}
                  onChange={handleChange}
                  
                  max="80"
                  min="14"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Fee</span>
                </label>
                <input
                  type="number"
                  name="fee"
                  placeholder="Fee"
                  className="input input-bordered"
                  value={visaDetails.fee}
                  onChange={handleChange}
                  
                  max="1000000"
                  min="100000"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Validity</span>
                </label>
                <input
                  type="number"
                  name="validity"
                  placeholder="Validity (Months)"
                  className="input input-bordered"
                  value={visaDetails.validity}
                  onChange={handleChange}
                  
                  max="96"
                  min="12"
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
