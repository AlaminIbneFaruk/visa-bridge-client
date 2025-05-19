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
        const response = await fetch(`https://sunflower-assignment-server.vercel.app/visa/${id}`);
        if (!response.ok) throw new Error("Error fetching data.");
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

  const handleVisaApplication = async () => {
    try {
      const response = await fetch("https://sunflower-assignment-server.vercel.app/visaapplications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visaId: id, user, status: "pending" }),
      });
      if (!response.ok) throw new Error("Failed to submit application.");
      toast.success("Application submitted successfully.");
      setIsModalOpen(false);
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-5 bg-base-100 text-neutral-content">
      <h2 className="text-3xl font-bold">{visa?.country} Visa Details</h2>
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <div className="flex-1 bg-base-100 text-neutral-content p-5 rounded-lg">
          <img src={visa?.countryImage} alt={visa?.country} className="w-full rounded-lg" />
        </div>
        <div className="flex-1 bg-base-100 text-neutral-content p-5 rounded-lg">
          <h3 className="text-2xl mb-2">{visa?.visaType} Visa</h3>
          <p className="text-3xl">{visa?.country}</p>
          <p className="text-lg">{visa?.validity} months</p>
          <p className="text-lg">{visa?.processingTime} days</p>
          <p className="text-3xl">৳{visa?.fee}</p>
          <p><span className="badge badge-secondary">{visa?.Age_Restriction||"0"}</span></p>
          <div>
            <h4 className="font-semibold">Required Documents:</h4>
              {visa?.required_documents}
          </div>
          <p className="mt-2">{visa?.description}</p>
          <button onClick={() => setIsModalOpen(true)} className="btn btn-info mt-4">Apply Now</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-neutral-content bg-opacity-50 flex items-center justify-center">
          <div className="bg-base-100 text-neutral-content p-6 rounded-lg w-96">
            <h2 className="text-xl">Apply for {visa?.visaType}</h2>
            <p>Email: {user?.email}</p>
            <p>Name: {user?.displayName}</p>
            <p>Applied Date: {new Date().toLocaleDateString()}</p>
            <p>Fee: ৳{visa?.fee}</p>
            <button onClick={handleVisaApplication} className="btn btn-success mt-4">Confirm</button>
            <button onClick={() => setIsModalOpen(false)} className="btn btn-error mt-2">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
