import { Link } from "react-router-dom";
import SectionContent from "./SectionContent";

const visaDenialReasons = [
  {
    title: "Incomplete or Incorrect Documentation",
    description:
      "Missing signatures, outdated forms, or inaccurate information can result in a rejection.",
    howToAvoid: [
      "Double-check all documents before submission.",
      "Follow the official checklist provided by the embassy or consulate.",
      "Seek professional guidance if unsure.",
    ],
  },
  {
    title: "Insufficient Financial Proof",
    description:
      "Failure to demonstrate sufficient funds may lead to a denial.",
    howToAvoid: [
      "Provide bank statements, sponsorship letters, or other proof of funds.",
      "Ensure that the documents clearly show your financial stability.",
    ],
  },
  {
    title: "Lack of Ties to Home Country",
    description:
      "If the authorities suspect you may overstay or immigrate illegally, they may reject your application.",
    howToAvoid: [
      "Present strong evidence of ties, such as employment, family, or property.",
      "Clearly state the purpose and duration of your visit.",
    ],
  },
];

const VisaDenial = () => {
  return (
    <section className="py-8 px-4 text-base-content">
      <div className="max-w-4xl mx-auto">
        <SectionContent
          title="Reasons For Denial Of A Visa"
          subtitle="Visa Denial Reasons"
          description={
            "Understanding why visa applications get denied can help you prepare better and increase your chances of approval."
          }
        />
        <div className="mt-12">
          {visaDenialReasons.map((reason, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box mb-4"
            >
              <input
                type="checkbox"
                id={`reason-${index}`}
                aria-expanded="false"
              />
              <div className="collapse-title text-xl font-medium">
                {reason.title}
              </div>
              <div className="collapse-content">
                <p>{reason.description}</p>
                <p className="mt-2 font-semibold">How to Avoid:</p>
                <ul className="list-disc pl-5">
                  {reason.howToAvoid.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/contact-us" className="btn btn-primary hover:bg-primary-focus">
            Contact Us for Assistance
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaDenial;
