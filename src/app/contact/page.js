// ContactPage.js
"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // A simple regex for email validation
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email address.");
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      setIsSent(true);

      try {
        const response = await axios.post(
          "https://voxalink-discord-express-api-1840f6529c67.herokuapp.com/support",
          {
            email: email,
            message: message,
          }
        );

        if (response.status === 200) {
          setResponseMessage("Your support message was successfully sent!");
        } else {
          setResponseMessage(
            "Too many requests at this time. Please try again later."
          );
        }
      } catch (error) {
        setResponseMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#17181d] text-black justify-center items-center px-4 overflow-x-hidden overflow-y-hidden">
      {/* Purple Circle - top left */}
      <div className="relative">
        <div className="hidden md:block absolute w-[50rem] h-[50rem] opacity-70 bg-[#b63fc9] rounded-full blur-[20rem] top-[-18rem] left-[-90rem]"></div>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 w-full max-w-md">
        <h3 className="text-lg leading-6 font-bold text-center text-white mb-4">
          Contact Us
        </h3>
        <p className="text-sm text-gray-400 mb-6 text-center">
          If you're seeking information about our AI-driven solutions, require
          help with our offerings, or are interested in exploring partnership
          opportunities, our dedicated team is ready to offer quick and tailored
          assistance.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300 text-black bg-gray-400 placeholder-black"
            placeholder="Enter your email"
            required
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300 text-black bg-gray-400 placeholder-black"
            placeholder="Your message"
            required
            rows="5"
          ></textarea>
          <button
            type="submit"
            disabled={isSent}
            className={`relative w-full py-2 px-4 rounded-full shadow-md focus:outline-none text-lg transition duration-500 ease-in-out ${
              isSent
                ? "bg-purple-500"
                : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:scale-105"
            }`}
            style={{
              border: "1px solid transparent",
              backgroundImage: isSent
                ? "none"
                : "linear-gradient(to right, #9d50bb, #ff6db3)", // Gradient from purple to pink
              opacity: isSent ? "0.5" : "1",
              boxShadow:
                "inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            {isSent ? "Sent" : "Send"}
            {!isSent && (
              <span
                className="absolute top-0 left-0 w-full h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0))",
                  opacity: "0.6",
                }}
              />
            )}
          </button>
        </form>
        {responseMessage && (
          <p className="text-center text-slate-400 mt-2">{responseMessage}</p>
        )}
      </div>
      <div className="relative">
        <div className="hidden md:block absolute w-[30rem] h-[30rem] opacity-70 bg-[#068bf8] rounded-full blur-[20rem] bottom-[-10rem] right-[-70rem] z-0"></div>
      </div>
    </div>
  );
};

export default ContactPage;
