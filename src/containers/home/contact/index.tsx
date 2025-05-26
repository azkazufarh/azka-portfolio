"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-2">Want to collaborate?</h2>
            <p className="text-gray-300">
              Let’s make something big for your business
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {["name", "email", "subject", "message"].map((field) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-gray-300 mb-2 capitalize"
                >
                  {field}
                </label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 text-gray-100 bg-gray-800"
                  />
                ) : (
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 text-gray-100 bg-gray-800"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
