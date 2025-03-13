import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  const [visas, setVisas] = useState([]);
  const [expandedVisa, setExpandedVisa] = useState(null);

  useEffect(() => {
    if (!uid) return;

    fetch("/visaInfo.json")
      .then((res) => res.json())
      .then((data) => {
        const userVisas = data.filter((visa) => visa.user.uid === uid);
        setVisas(userVisas);
      })
      .catch((error) => console.error("Error fetching visas:", error));
  }, [uid]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center p-4 bg-white">
        My Added Visas
      </h2>
      {visas.length === 0 ? (
        <p>No visas found.</p>
      ) : (
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
          {visas.map((visa) => (
            <li
              key={visa.id}
              className="card w-full bg-base-100 shadow-xl p-4 rounded-md"
            >
              <img
                src={visa?.countryImage}
                alt={`${visa?.country} Visa`}
                className="h-48 border-2 border-sky-400 w-full object-cover"
              />
              <h3 className="text-lg font-bold text-center mt-2">
                {visa?.country}
              </h3>
              <p>
                <strong>Country:</strong> {visa?.country}
              </p>
              <p>
                <strong>Type:</strong> {visa?.visaType}
              </p>
              <p
                className={`cursor-pointer ${
                  expandedVisa === visa.id ? "h-auto" : "h-20 overflow-hidden"
                }`}
                onClick={() =>
                  setExpandedVisa(expandedVisa === visa.id ? null : visa.id)
                }
              >
                <strong>Description:</strong> {visa?.description}
              </p>
              {expandedVisa !== visa.id && (
                <button
                  className="text-blue-500 underline mt-2"
                  onClick={() => setExpandedVisa(visa.id)}
                >
                  Read More
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAddedVisas;
