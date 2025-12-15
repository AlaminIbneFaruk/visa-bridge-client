import { motion } from "framer-motion";
import SectionContent from "../SectionContent";

const Ext2 = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-4">
      <div className="w-full">
        <div className="justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SectionContent
              subtitle="Visa Requirements"
              title="Essential Documents for Visa Application"
              description={`              Understanding visa requirements is essential for a smooth application process. Learn about the necessary documents, eligibility criteria, and additional steps based on your destination.`}
            />
            <p className="text-white text-lg mt-4"></p>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 p-2">
        {[
          "Valid Passport",
          "Passport-Sized Photos",
          "Visa Application Form",
          "Proof of Financial Stability",
          "Travel Itinerary",
          "Proof of Purpose",
          "Travel Insurance",
          "Proof of Residence",
          "Criminal Background Check",
          "Health Certificates",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card bg-sky-600 shadow-lg shadow-neutral-content"
          >
            <div className="card-body items-center">
              <h2 className="card-title text-white text-center">
                {index + 1}. {item}
              </h2>
              <p className="text-white text-center">Description for {item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ext2;
