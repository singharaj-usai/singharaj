import React from "react";
import Blog from "./Webdev/Webdev";

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
            Welcome to my portfolio!
          </h3>
          <div className="text-gray-400 mb-3">
            <p className="m-1">
              This is a work-in-progress page for my{" "}
              <a className="text-blue-500"> Portfolio </a> page{" "}
              page, here you will see things like my web development projects, graphic design artwork, and stuff.
            </p>
          </div>
        </div>
        <Blog />
      </div>
    </div>
  </section>
  );
};

export default About;
