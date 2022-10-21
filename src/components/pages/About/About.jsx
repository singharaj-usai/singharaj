import React from "react";
import Skills from './Skills/Skills';

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
            <h3 className="text-2xl font-bold mb-4">
              Welcome to the behind the scenes look of me!
            </h3>
            <div className="text-gray-400 mb-3">
              <p className="m-1">
                My Portfolio is a single page React.JS application that renders different page styles when you navigate through the navigation bar above!
              </p>
              <p className="m-1">
                Over the past 6 months I have learned a lot about Web Development while taking this Coding Bootcamp and it's been an exciting journey.
              </p>
              <p className="m-1">
                In Web Development, I prefer working on front-end, specifically designing the web layout.
              </p>
              <p className="m-1">
                Outside of Web Development, in my free time, I like to create Graphic Art mainly for Roblox and YouTube creators. I also love to play Muay Thai kickboxing as a fun workout routine.
              </p>
              <p className="m-1">
                Thank you for reading!
              </p>
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
