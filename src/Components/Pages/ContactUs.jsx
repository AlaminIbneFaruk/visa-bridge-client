import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Sending..."); // Toast notification for sending status

    emailjs
      .send(
        "service_92746yasin",
        "template_q6hew1k",
        formData,
        "k2RPSI748p9JuDy2x"
      )
      .then(() => {
        toast.success("Message sent successfully!"); // Success notification
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later."); // Error notification
      });
  };

  return (
    <div className="relative backdrop-blur-lg rounded-lg p-8 md:p-10 space-y-6 shadow-lg">
      <div className="max-w-lg mx-auto border-4 border-sky-400 bg-white/80 backdrop-blur-lg rounded-lg p-8 md:p-10 space-y-6 shadow-lg">
        <h2
          className="text-center font-extrabold text-4xl md:text-4xl p-4 uppercase "
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white/70 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white/70 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white/70 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full btn btn-info text-white font-semibold py-2 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 ${
              status.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
