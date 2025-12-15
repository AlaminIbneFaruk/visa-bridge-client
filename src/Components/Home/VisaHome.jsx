import { useNavigate } from "react-router-dom";
import SectionContent from "../SectionContent";
import useVisas from "../../hooks/useVisas";
const placeholderVisas = Array(8).fill({
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
  // const [visas, setVisas] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://sunflower-assignment-server.vercel.app/visas")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch visas");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setVisas(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setVisas([]);
  //       setLoading(false);
  //     });
  // }, []);
  const [visas,loading]=useVisas();
  // const popular
  const navigate = useNavigate();

  const visasToRender = loading
    ? placeholderVisas
    : visas && visas.length > 0
    ? visas
    : placeholderVisas;

  return (
    <div className="px-4 md:px-8">
      <div>
        <h2 className="text-center">
          <SectionContent
            subtitle="Popular Countries"
            title="Explore Our Visa Options"
            description="Discover a wide range of visa services tailored to your needs. From tourist visas to work permits, we have you covered."
          />
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
        {visasToRender.map((visa, idx) => (
          <div
            className="card w-full bg-base-100 shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105"
            key={visa?._id || idx}
          >
            <figure className="w-full h-48">
              <img
                src={visa?.countryImage || "https://via.placeholder.com/150"}
                alt={visa?.country}
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {visa?.country}
                <span className="badge badge-accent ml-2">{visa?.visaType}</span>
              </h2>
              <p className="text-lg text-primary my-2">৳{visa?.fee}</p>
              <div className="flex justify-between mb-2">
                <span>Validity: {visa?.validity} months</span>
                <span>Processing: {visa?.processingTime} days</span>
              </div>
              <div className="flex justify-end">
                <span className="badge badge-outline">
                  {visa?.Age_Restriction || "None"}
                </span>
              </div>
              <button
                className="btn btn-info w-full text-white mt-3"
                onClick={() => navigate(`/details/${visa?._id}`)}
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaHome;
