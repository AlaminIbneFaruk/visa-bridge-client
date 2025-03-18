import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVisa = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visa/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Visa not found.");
          }
          throw new Error("An error occurred while fetching the data.");
        }
        const data = await response.json();
        setVisa(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVisa();
  }, [id]);

  if (loading)
    return <div className="flex justify-center items-center">Loading...</div>;
  if (error) return <p className="text-error font-bold">{error}</p>;
  if (!visa) return <p>No visa details available.</p>;

  return (
    <div className="mx-auto p-4  rounded-lg flex">
      <div className="bg-gradient-to-t  from-sky-500 to-white p-4 rounded-s-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-2 text-center">Visa Details</h2>

        {/* Country Flag */}
        <div className="mb-4 flex justify-center p-2 border-2">
          <img
            src={visa?.countryImage}
            alt={`Flag of ${visa?.country}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="space-y-2 border-2 p-5 rounded-e-xl shadow-xl bg-base-100">
        <p className="border-2 p-2 rounded-lg bg-base-200">
          <span className="font-semibold">Type:</span> {visa?.visaType}
        </p>
        <p className="border-2 p-2 rounded-lg bg-base-100">
          <span className="font-semibold">Country:</span> {visa?.country}
        </p>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-title">Validity</div>
            <div>
              <span className="stat-value text-info">{visa?.validity} </span>
              months
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Processing Time</div>
            <div>
              <span className="stat-value text-info">
                {visa?.processingTime}{" "}
              </span>
              days
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Fee</div>
            <div className="stat-value text-info">৳{visa?.fee}</div>
          </div>
        </div>

        <div className="card shadow-lg bg-base-200 rounded-lg">
          <div className="card-body">
            <h2 className="card-title font-semibold">Required Documents</h2>
            <ul className="list-disc list-inside">
              {visa?.required_documents}
            </ul>
          </div>
        </div>

        <div className="card shadow-lg bg-base-100 rounded-lg">
          <div className="card-body">
            <h2 className="card-title font-semibold">Description</h2>
            <p>{visa?.description}</p>
          </div>
        </div>

        <p className="border-2 p-2 rounded-lg bg-base-200">
          <span className="font-semibold">Age Restriction:</span>{" "}
          {visa?.Age_Restriction}
        </p>
        <p className="border-2 p-2 rounded-lg bg-base-100">
          <span className="font-semibold">Application Method:</span>{" "}
          {visa?.Application_method}
        </p>
        <p className="border-2 p-2 rounded-lg bg-base-200">
          <span className="font-semibold">Required Files:</span>{" "}
          {visa?.required_files?.join(", ")}
        </p>
        <div className="mt-4 flex items-center space-x-3">
          <img
            src={visa?.user?.photo}
            alt={visa?.user?.username}
            className="w-12 h-12 rounded-full"
          />
          <span className="font-semibold">{visa?.user?.username}</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Apply for the Visa
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Visa Application</h2>
              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {user?.displayName}{" "}
              </p>
              <p>
                <span className="font-semibold">Applied Date:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Fee:</span> ৳{visa?.fee}
              </p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => toast.success("Application submitted successfully.")}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaDetails;
