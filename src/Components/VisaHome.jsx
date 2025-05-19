import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionContent from "./SectionContent";

const placeholderVisas = Array(6).fill({
  country: "Country Name",
  countryImage: "",
  visaType: "Visa Type",
  fee: "-",
  validity: "-",
  processingTime: "-",
  required_documents: "All required documents",
  Application_method: "Application method",
  Age_Restriction: "None",
});

const VisaHome = () => {
  const [visas, setVisas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setLoading(true);
    fetch("https://sunflower-assignment-server.vercel.app/visas")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch visas");
        }
        return res.json();
      })
      .then((data) => {
        setVisas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setVisas([]);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const visasToRender = loading
    ? placeholderVisas
    : visas && visas.length > 0
    ? visas
    : placeholderVisas;

  return (
    <div className="px-8">
      <div>
        <h2 className="text-center">
          <SectionContent
            subtitle="Popular Countries"
            title="Explore Our Visa Options"
            description="Discover a wide range of visa services tailored to your needs. From tourist visas to work permits, we have you covered."
          />
        </h2>
        <button onClick={toggleSortOrder} className="btn btn-secondary my-4">
          Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto py-12">
        {visasToRender.map((visa, idx) => (
          <div className="card w-full bg-base-100 shadow-xl lg:p-0 p-5" key={visa?._id || idx}>
            <figure>
              <img
                src={visa?.countryImage || "https://via.placeholder.com/150"}
                alt={visa?.country}
                className="w-full h-full lg:h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{visa?.country}
                <div className="badge badge-accent">{visa?.visaType}</div>
              </h2>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Fee</div>
                  <div className="stat-value text-primary">৳{visa?.fee}</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Validity</div>
                  <div className="stat-value">{visa?.validity} months</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Processing</div>
                  <div className="stat-value">{visa?.processingTime} days</div>
                </div>
              </div>
              <p><strong>Required Documents:</strong> {visa?.required_documents}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{visa?.Application_method}</div>
                <div className="badge badge-outline">
                  {visa?.Age_Restriction ? `${visa?.Age_Restriction}+ years` : "None"}
                </div>
              </div>
              <div>
                <button className="btn btn-primary font-bold" onClick={() => navigate(`/details/${visa?._id}`)}>
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaHome;
