import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
const Ext1 = () => {
  const [text] = useTypewriter({
    words: ["WELCOME TO VISA BRIDGE", "Visa Application Process"],
    loop: Infinity,
  });
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
          {text}
          <Cursor cursorColor="skyBlue" />
        </h2>
        <p className="text-lg mb-8">
          Follow these simple steps to apply for your visa and get your travel
          plans on track.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="card lg:card-side bg-sky-600 shadow-xl mb-8 lg:mb-0 w-full">
            <figure>
              <img
                src="https://i.ibb.co.com/DY639Qz/download-10.jpg"
                alt="Step 1: Select Your Destination"
                className="h-48 w-full object-cover "
              />
            </figure>
            <Fade>
              <div className="card-body items-start">
                <h2 className="card-title text-white text-3xl font-bold">
                  Step 1: Select Your Destination
                </h2>
                <p className="text-white">
                  Choose the country you travel to and determine the visa
                  requirements.
                </p>
              </div>
            </Fade>
          </div>
          <div className="card lg:card-side bg-sky-600 shadow-xl mb-8 lg:mb-0 w-full">
            <figure>
              <img
                src="https://i.ibb.co.com/F88GPCY/images-6.jpg"
                alt="Step 2: Fill in the Application"
                className="h-60 w-full object-cover"
              />
            </figure>
            <Fade>
              <div className="card-body items-start">
                <h2 className="card-title text-white text-3xl font-bold">
                  Step 2: Fill in the Application
                </h2>
                <p className="text-white">
                  Complete the visa application with your personal details and
                  required documents.
                </p>
              </div>
            </Fade>
          </div>
          <div className="card lg:card-side bg-sky-600 shadow-xl mb-8 lg:mb-0 w-full">
            <figure>
              <img
                src="https://i.ibb.co.com/LRH57hD/download-1.png"
                alt="Step 3: Submit and Track"
                className="h-52 w-full object-cover"
              />
            </figure>
            <Fade>
              <div className="card-body items-start">
                <h2 className="card-title text-white text-3xl font-bold">
                  Step 3: Submit and Track
                </h2>
                <p className="text-white">
                  Submit your application and track its progress through our
                  portal.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ext1;
