import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form className="p-8 md:mx-4 bg-white rounded-md shadow-md">
          <div className="m-3">
            <h3 className="text-2xl font-medium mb-6">
              Let's get in contact!
            </h3>
            <div className="text-gray-400 text-lg mb-3">
              <p className="m-1">
                I'm always open to conversations about job opportunities,
                questions about my portfolio, or even casual conversations, so
                let's get in touch!
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full border border-gray-100 rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="inline-block mb-3 rounded-full bg-blue-500 text-center border-0 py-3 px-8 text-white leading-7 tracking-wide hover:bg-blue-300 transition ease-out duration-200 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
