import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(" Thank you for contact us !", {
      delay:1000
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-base-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        {/* Left side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ibb.co.com/r2BQKr8K/undraw-contact-us-kcoa.png"
            alt="Contact Illustration"
            className="w-full"
          />
        </div>

        {/* Right side Form */}
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white dark:bg-gray-800 border border-gray-200 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out! We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-blue-500 focus:outline-primary w-full px-4 py-2 rounded-sm"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="border border-blue-500 focus:outline-primary w-full px-4 py-2 rounded-sm"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="border border-blue-500 focus:outline-primary w-full px-4 py-2 rounded-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="border border-blue-500 focus:outline-primary w-full px-4 py-2 rounded-sm"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-[#0EA106] hover:bg-[#0c8805] text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-6"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                className="w-6"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
