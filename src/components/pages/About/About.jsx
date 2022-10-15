import React from "react";
import Skills from './Skills/Skills';

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Welcome to the behind the scenes look of me!</h3>
            <p className="text-gray-400 leading-6 mb-3">
            My React Portfolio is a single page application that renders different page styles when you navigate through the navigation bar above!
            Over the past 6 months I've learned a lot about Web Development while taking this Coding Bootcamp and it's been an exciting journey.
            </p>
            <p className="text-gray-400 leading-6 mb-3">
            In my free time, I create Game Art mostly on Roblox, and I also enjoy playing any PS4 games.
            I look forward to learning more about Web Develop subjects in the future as it's something that I'm really interested in as a long-term career.
            </p>
            <p className="text-gray-400 leading-6 mb-3">
            Thank you for reading!
            </p>
          </div>
          <Skills/>
        </div>
      </div>
    </section>
  );
};

export default About;
