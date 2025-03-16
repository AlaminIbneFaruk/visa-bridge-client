import { useEffect, useState } from "react";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch("/visaInfo.json")
      .then((res) => res.json())
      .then((data) => setVisas(data))
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);

  return (
    <>
      
      <div className="container mx-auto">
        <div className="bg-white py-4">
          <h1 className="text-4xl font-bold text-center">All Visas</h1>
        </div>
        <div className="container mx-auto py-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {visas.map((visa) => (
            <div key={visa.id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={visa.countryImage}
                  alt={visa.country}
                  className="w-full lg:h-48 h-96 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-between">
                  {visa.country}
                  <div
                    className={`badge ${
                      visa.visaType === "Tourist"
                        ? "badge-primary"
                        : visa.visaType === "Work"
                        ? "badge-secondary"
                        : "badge-accent"
                    }`}
                  >
                    {visa.visaType}
                  </div>
                </h2>
                <div className="grid gap-2">
                  <div className="stat border-2">
                    <div className="stat-title">Fee</div>
                    <div className="stat-value text-primary">৳{visa.fee}</div>
                  </div>
                  <div className="stat border-2">
                    <div className="stat-title">Validity</div>
                    <div className="stat-value">{visa.validity} days</div>
                  </div>
                  <div className="stat border-2">
                    <div className="stat-title">Processing</div>
                    <div className="stat-value">{visa.processingTime} days</div>
                  </div>
                </div>
                <p>
                  <strong>Required Documents:</strong> {visa.required_documents}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {visa.Application_method}
                  </div>
                  <div className="badge badge-outline">
                    {visa?.Age_Restriction?`${visa?.Age_Restriction}+ years`:"None"} 
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary font-bold">See Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllVisas;
