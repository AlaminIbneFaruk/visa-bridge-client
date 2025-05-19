import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const steps = [
  {
    title: "Step 1: Select Your Destination",
    description:
      "Choose the country you travel to and determine the visa requirements.",
    image: "https://i.postimg.cc/gc4KTH0P/step1.png",
  },
  {
    title: "Step 2: Fill in the Application",
    description:
      "Complete the visa application with your personal details and required documents.",
    image: "https://i.postimg.cc/1XtS9zS5/Step2.png",
  },
  {
    title: "Step 3: Submit and Track",
    description:
      "Submit your application and track its progress through our portal.",
    image: "https://i.postimg.cc/bJL8ctKB/Step3.png",
  },
  {
    title: "Step 4: Pay the Visa Fees",
    description:
      "Make the necessary payments using our secure payment gateway.",
    image: "https://i.postimg.cc/rygqwjcm/step4.png",
  },
  {
    title: "Step 5: Attend Your Appointment",
    description:
      "Visit the embassy or consulate as scheduled for your interview.",
    image: "https://i.postimg.cc/2SrcsK72/Step5.png",
  },
  {
    title: "Step 6: Receive Your Visa",
    description:
      "Visa approval notification received—collect your visa promptly from the office to avoid any operational delays. Ensure all documentation is ready to facilitate a smooth pickup. Stay proactive to maintain compliance and avoid bottlenecks.",
    image: "https://i.postimg.cc/MKXgs4tR/Step6.png",
  },
];

const Ext1 = () => {
  const [text] = useTypewriter({
    words: ["WELCOME TO VISA BRIDGE", "Visa Application Process"],
    loop: Infinity,
  });

  return (
    <section className="py-16 px-8 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent text-center">
          {text}
          <Cursor cursorColor="skyBlue" />
        </h2>
        <p className="text-lg my-12 text-center">
          Follow these simple steps to apply for your visa and get your travel
          plans on track.
        </p>
        <div className="grid grid-cols-1 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card lg:card-side bg-sky-600 shadow-xl mb-8 lg:mb-0 "
            >
              <figure className="lg:w-1/3 h-full ">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full bg-start object-cover"
                />
              </figure>
              <Slide direction={index % 2 === 0 ? "left" : "right"} className="w-2/3">
                <div className="card-body lg:py-[calc(15%)]">
                  <h2 className="card-title text-white text-4xl font-bold pb-8">
                    {step.title}
                  </h2>
                  <p className="text-white text-xl pb-4">{step.description}</p>
                </div>
              </Slide>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ext1;
