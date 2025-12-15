import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const steps = [
  {
    id: 1,
    title: "Step 1: Select Your Destination",
    description:
      "Choose the country you travel to and determine the visa requirements.",
    image: "https://i.postimg.cc/gc4KTH0P/step1.png",
  },
  {
    id: 2,
    title: "Step 2: Fill in the Application",
    description:
      "Complete the visa application with your personal details and required documents.",
    image: "https://i.postimg.cc/1XtS9zS5/Step2.png",
  },
  {
    id: 3,
    title: "Step 3: Submit and Track",
    description:
      "Submit your application and track its progress through our portal.",
    image: "https://i.postimg.cc/bJL8ctKB/Step3.png",
  },
  {
    id: 4,
    title: "Step 4: Pay the Visa Fees",
    description:
      "Make the necessary payments using our secure payment gateway.",
    image: "https://i.postimg.cc/rygqwjcm/step4.png",
  },
  {
    id: 5,
    title: "Step 5: Attend Your Appointment",
    description:
      "Visit the embassy or consulate as scheduled for your interview.",
    image: "https://i.postimg.cc/2SrcsK72/Step5.png",
  },
  {
    id: 6,
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          {steps.map((step, index) => (
            <div className="flex flex-col items-center mb-8" key={step.id}>
              <Slide direction={index % 2 === 0 ? "left" : "right"} key={index}>
                <div className="w-full max-w-md rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md min-h-60">
                  <div className="flex items-start justify-between">
                    {/* Step Number */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-600">
                      {step?.id}
                    </div>

                    {/* Icon */}
                    <div className="text-blue-500">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {step?.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {step?.description}
                  </p>
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
