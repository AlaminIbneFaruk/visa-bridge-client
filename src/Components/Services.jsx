import { Link } from "react-router-dom";
import SectionTitle from "./SectionContent";

const Services = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <SectionTitle subtitle="Our Visa Services" title="Comprehensive Visa Solutions Tailored to Your Needs" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Tourist Visa Service */}
        <div className="card bg-base-100 shadow-lg shadow-neutral-content">
          <div className="card-body">
            <h2 className="card-title">Tourist Visa Assistance</h2>
            <p>Get help with your tourist visa application, documentation, and processing.</p>
            <div className="card-actions justify-end">
              <Link to="/tourist-visa" className="btn btn-info">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Work Visa Service */}
        <div className="card bg-base-100 shadow-lg shadow-neutral-content">
          <div className="card-body">
            <h2 className="card-title">Work Visa Processing</h2>
            <p>Streamlined process for obtaining work visas for various countries.</p>
            <div className="card-actions justify-end">
              <Link to="/work-visa" className="btn btn-info">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Student Visa Service */}
        <div className="card bg-base-100 shadow-lg shadow-neutral-content">
          <div className="card-body">
            <h2 className="card-title">Student Visa Guidance</h2>
            <p>Expert support with student visa applications and interview preparation.</p>
            <div className="card-actions justify-end">
              <Link to="/student-visa" className="btn btn-info">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
