import React from "react";
import SoftSkillsItems from "./SoftSkillsItems";

const softskillData = [
  {
    id: 1,
    title: "Creative",
  },
  {
    id: 2,
    title: "Management",
  },
  {
    id: 3,
    title: "Multi-Tasking",
  },
  {
    id: 4,
    title: "Self-Confidence",
  },
  {
    id: 5,
    title: "Problem Solving",
  },
  {
    id: 6,
    title: "Strong Work Ethic",
  },
  {
    id: 7,
    title: "Teamwork",
  },
  {
    id: 8,
    title: "Leadership",
  },
  {
    id: 9,
    title: "Communication",
  },

];

const SoftSkills = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap ">
        {softskillData.map((softskills, id) => (
          <SoftSkillsItems softskills={softskills} key={id} />
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
