import { useEffect, useState } from "react";

const VisaHome = () => {
  const [visas, setVisas] = useState([]);
  useEffect(() => {
    fetch("/visaInfo.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVisas(data);
      });
  }, []);
  return (
    <div className="container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-12">
      {visas.map((visa) => (
        <div className="card w-full bg-base-100 shadow-xl" key={visa.id}>
          <figure>
            <img
              src={visa?.countryImage}
              alt={visa?.country}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {visa?.country}
              <div
                className={`badge ${
                  visa?.visaType === "Tourist"
                    ? "badge-primary"
                    : visa?.visaType === "Work"
                    ? "badge-secondary"
                    : "badge-accent"
                }`}
              >
                {visa?.visaType}
              </div>
            </h2>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Fee</div>
                <div className="stat-value text-primary">৳{visa?.fee}</div>
              </div>
              <div className="stat ">
                <div className="stat-title">Validity</div>
                <div className="stat-value">{visa?.validity} days</div>
              </div>
              <div className="stat">
                <div className="stat-title">Processing</div>
                <div className="stat-value">{visa?.processingTime} days</div>
              </div>
            </div>
            <p>
              <strong>Required Documents:</strong> {visa?.required_documents}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {visa?.Application_method}
              </div>
              <div className="badge badge-outline">{visa?.Age_Restriction?`${visa?.Age_Restriction}+ years`:"None"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaHome;
