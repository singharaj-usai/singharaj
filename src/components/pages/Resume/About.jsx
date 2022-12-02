import React from "react";
import Skills from "./TechSkill/Skill";
import Blog from "./Education/Education";
import Knowledge from "./Knowledge/Knowledges";
import Summary from "./Summary/Summary";
import SoftSkill from "./SoftSkill/SoftSkills"

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
              Summary
            </h3>
           <Summary />
          </div>
          <div className="md:mx-4">
            <h3 className="text-2xl font-medium mb-4">Education</h3>
          </div>
          <Blog />
          <div className="md:mx-4">
            <h3 className="text-2xl font-medium mb-4">Technical Skills</h3>
          </div>
          <Knowledge />
          <div className="md:mx-4">
            <h3 className="text-2xl font-medium mb-4">Working Skills</h3>
          </div>
          <Skills />
          <div className="md:mx-4">
            <h3 className="text-2xl font-medium mb-4">Soft Skills</h3>
          </div>
          <SoftSkill />
        </div>
      </div>
    </section>
  );
};

export default About;
