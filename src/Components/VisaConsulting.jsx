import { AiFillHeart } from "react-icons/ai";
import { MdOutlineRecordVoiceOver, MdOutlineSpeed } from "react-icons/md";
import SectionContent from "./SectionContent";

const VisaConsulting = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="w-full md:w-1/3 relative">
        <img
          src="https://i.ibb.co/bMpJZ9ws/travelers.webp"
          alt="Travelers"
          className="w-auto h-[10%] object-cover border-4 border-white"
        />
        <div className="flex justify-center mt-4 absolute  bottom-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-white bg-red-600 rounded-full p-3 ">
            <AiFillHeart className="w-6 h-6" />
          </span>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-6">
        <SectionContent
          subtitle="About Company"
          title="Greetings to Experience Visa Consulting Firm."
          description={`At Visa Bridge, we are committed to simplifying your journey to new destinations by offering reliable and efficient visa consulting services. Our dedicated team of experts guides you through every step of the visa application process, ensuring a smooth and hassle-free experience. Whether you're seeking tourist, student, or work visas, we provide tailored support to meet your unique needs. With a focus on accuracy, speed, and personalized assistance, we take pride in helping you turn your travel dreams into reality.`}
        />
        <div className="flex space-x-6 mt-4 max-w-xl mx-auto">
          <div className="flex items-center flex-1 gap-2">
            <span className="text-white bg-red-600 rounded-full p-3 mb-2">
              <MdOutlineRecordVoiceOver className="w-6 h-6" />
            </span>
            <span className="text-center">Direct Online Interviews</span>
          </div>
          <div className="flex items-center flex-1 gap-2">
            <span className="text-white bg-red-600 rounded-full p-3 mb-2">
              <MdOutlineSpeed className="w-6 h-6" />
            </span>
            <span className="text-center">Quick & Easy Process</span>
          </div>
        </div>
            <button className="btn mt-4 ml-8 btn-wide max-w-xl mx-auto py-2 bg-primary text-white hover:bg-blue-700">
              Read More
            </button>
      </div>
    </div>
  );
};

export default VisaConsulting;
