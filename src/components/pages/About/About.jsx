import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            {/*
            Just found out how to do JSX comments lol
            Anyways, this About Me below should be a component probably.
            Also remove redundant codes.
            */}
            <h3 className="text-2xl font-medium mb-4">
              Welcome to the behind the scenes look of me!
            </h3>
            <div className="text-gray-400 mb-3">
              <p className="m-1">
                My portfolio website is a single page{" "}
                <a className="text-blue-500"> React.JS </a> application with{" "}
                <a className="text-indigo-600"> Tailwind CSS </a> that renders
                different page styles when you navigate through the navigation
                bar above!
              </p>
              <p className="m-1">
                Over the past 6 months, I have learned a lot about Web
                Development focused in{" "}
                <a className="text-yellow-500"> JavaScript </a> and the{" "}
                <a className="text-yellow-500"> MERN stack </a> while taking
                this{" "}
                <a
                  href="https://bootcamp.msu.edu/"
                  target="_blank"
                  className="underline text-blue-500"
                >
                  Coding Bootcamp
                </a>{" "}
                offered by Michigan State University, and it's been a great
                experience.
              </p>
              <p className="m-1">
                In Web Development, I prefer working on the front-end,
                specifically designing the web page layout (also known as{" "}
                <a className="text-pink-500">CSS</a>!). I'm always learning new
                things and open to new ideas!
              </p>
              <p className="m-1 font-medium text-lg text-gray-400">Thank you for reading!</p>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
