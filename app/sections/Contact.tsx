"use client";

import { socialLinks } from "@/datas/data";
import Link from "next/link";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setEmailError("");

    // Validate email
    if (!formData.email || !emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear email error when user types
    if (name === "email" && emailError) {
      setEmailError("");
    }
  };

  return (
    <section
      className="relative overflow-hidden text-center w-full sm:w-[85%] m-auto pb-52 lg:py-30 bg-gradient-to-br from-[#121212] via-[#1c1c1c] to-[#121212] rounded-3xl scroll-mt-24"
      id="contact"
      data-aos="fade-up"
    >
      {/* Decorative Blurred Accent Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#f8d101] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-white opacity-10 blur-3xl rounded-full"></div>
      
      <div className="relative flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto pt-16">
        <h2 className=" text-lg sm:text-3xl text-secondary-color-3 font-semibold font-idgrotesk">
          Let’s Build Something Impactful
        </h2>
        <h3 className=" text-2xl sm:text-4xl font-bold">Get in Touch</h3>
        <p className="text-base sm:text-lg">
          Open to AI/ML opportunities and meaningful collaborations.<br/>
          Send a message below or emai{" "}
          <Link
            href={"mailto:miteshgupta2711@gmail.com"}
            className=" text-secondary-color-3 font-medium"
          >
            miteshgupta2711@gmail.com
          </Link>
          .
        </p>

        {/* Contact Form */}
        <div className="w-full max-w-2xl mt-10 animate-[fadeIn_0.8s_ease-in-out]">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:border-[#f8d101]/40 hover:-translate-y-1">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2 text-left"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#f8d101] focus:border-[#f8d101] outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-md text-white placeholder-gray-400 outline-none transition-all duration-300 ${
                      emailError
                        ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        : "border-white/20 focus:ring-2 focus:ring-[#f8d101] focus:border-[#f8d101]"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2 text-left">
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2 text-left"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#f8d101] focus:border-[#f8d101] outline-none transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f8d101] to-yellow-400 text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(248,209,1,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {success && (
                  <div className="mt-6 bg-green-500/10 border border-green-400/30 backdrop-blur-lg rounded-2xl p-5 shadow-[0_0_25px_rgba(34,197,94,0.25)] animate-[fadeIn_0.6s_ease-in-out]">
                    <div className="flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="text-center">
                        <h4 className="text-green-300 font-semibold text-lg">
                          Message Sent Successfully
                        </h4>
                        <p className="text-gray-300 text-sm mt-1">
                          Thank you for reaching out. I'll get back to you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <p className="text-center text-red-400 font-medium">
                    {error}
                  </p>
                )}
              </form>
          </div>
        </div>
      </div>
      <ul className="flex flex-row md:hidden justify-center gap-4 mt-10 items-center">
        {socialLinks.map((socialLink, id) => (
          <li key={id} className={`flex items-center cursor-pointer gap-5`}>
            <Link
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={socialLink.simpleIcon}
                alt={socialLink.name}
                height={20}
                width={20}
                className="transition-all duration-300 filter grayscale dark:grayscale-0 hover:grayscale-0 dark:filter dark:brightness-0 dark:invert hover:dark:brightness-100 hover:dark:invert-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Contact;
