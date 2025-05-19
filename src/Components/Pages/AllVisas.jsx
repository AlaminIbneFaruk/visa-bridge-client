import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [sortType, setSortType] = useState("None");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sunflower-assignment-server.vercel.app/all-visas")
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data);
      })
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);

  // Handle filter change
  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type === "All") {
      setFilteredVisas(visas);
    } else {
      const filtered = visas.filter((visa) => visa?.visaType === type);
      setFilteredVisas(filtered);
    }
  };

  // Handle sort change
  const handleSortChange = (type) => {
    setSortType(type);
    let sortedVisas = [...filteredVisas];
    if (type === "Fee") {
      sortedVisas.sort((a, b) => Number(a.fee) - Number(b.fee));
    } else if (type === "Validity") {
      sortedVisas.sort((a, b) => a.validity - b.validity);
    } else if (type === "Processing") {
      sortedVisas.sort((a, b) => a.processingTime - b.processingTime);
    }
    setFilteredVisas(sortedVisas);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white py-4 flex justify-between items-center px-4">
          <h1 className="text-4xl font-bold">All Visas</h1>
          <div className="flex gap-4">
            <div className="dropdown dropdown-end z-10">
              <label tabIndex={0} className="btn btn-primary m-1">
                Filter by Type: {filterType}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={() => handleFilterChange("All")}>All</button>
                </li>
                <li>
                  <button onClick={() => handleFilterChange("Tourist")}>
                    Tourist
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFilterChange("Work")}>
                    Work
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFilterChange("Student")}>
                    Student
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFilterChange("Transit")}>
                    Transit
                  </button>
                </li>
                <li>
                  <button onClick={() => handleFilterChange("Business")}>
                    Business
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end z-10">
              <label tabIndex={0} className="btn btn-secondary m-1">
                Sort by: {sortType}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button onClick={() => handleSortChange("None")}>None</button>
                </li>
                <li>
                  <button onClick={() => handleSortChange("Fee")}>Fee</button>
                </li>
                <li>
                  <button onClick={() => handleSortChange("Validity")}>
                    Validity
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSortChange("Processing")}>
                    Processing
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredVisas.map((visa) => (
            <div key={visa?._id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={visa?.countryImage}
                  alt={visa?.country}
                  className="w-full lg:h-48 h-96 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-between">
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
                <div className="stat border-2">
                  <div className="stat-title">Fee</div>
                  <div className="stat-value text-primary">৳{visa?.fee}</div>
                </div>
                <div className="stat border-2">
                  <div className="stat-title text-base">Validity</div>
                  <div className="stat-value text-base">{visa?.validity} months</div>
                </div>
                <div className="stat border-2">
                  <div className="stat-title text-base">Processing</div>
                  <div className="stat-value text-base">{visa?.processingTime} days</div>
                </div>
                <p>
                  <strong>Required Documents:</strong>{" "}
                  {visa?.required_documents}
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {visa?.Application_method}
                  </div>
                  <div className="badge badge-outline">
                    {visa?.Age_Restriction
                      ? `${visa?.Age_Restriction}+ years`
                      : "None"}
                  </div>
                </div>
                <button
                  className="btn btn-primary font-bold"
                  onClick={() => navigate(`/details/${visa?._id}`)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllVisas;
