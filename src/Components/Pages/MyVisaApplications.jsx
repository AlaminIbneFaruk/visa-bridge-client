import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [appliedVisas, setAppliedVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppliedVisas = async () => {
      if (!user?.email) {
        setLoading(false);
        setError("Please log in to view your visa applications");
        return;
      }

      try {
        const response = await fetch(
          `https://sunflower-assignment-server.vercel.app/visaapplications/${user.uid}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch visa applications");
        }
        const data = await response.json();
        setAppliedVisas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedVisas();
  }, [user?.email,user?.uid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-error p-4">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Visa Applications
      </h1>
      
      {appliedVisas.length === 0 ? (
        <div className="text-center p-8 bg-base-100 rounded-lg shadow">
          <p className="text-lg">You have not applied for any visas yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appliedVisas.map((appliedVisa) => (
            <div
              key={appliedVisa._id}
              className="card bg-base-100 shadow-lg shadow-neutral-content rounded-lg overflow-hidden"
            >
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="card-title">
                      {appliedVisa.visaDetails.country}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {appliedVisa.visaDetails.visaType}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={`badge ${
                        appliedVisa.applicationStatus === "pending"
                          ? "badge-warning"
                          : appliedVisa.applicationStatus === "suspended"
                          ? "badge-error"
                          : "badge-success"
                      }`}
                    >
                      {appliedVisa.applicationStatus}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Applied Date:</span>{" "}
                    {new Date(appliedVisa.appliedDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Fee:</span> ৳
                    {appliedVisa.visaDetails.fee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;