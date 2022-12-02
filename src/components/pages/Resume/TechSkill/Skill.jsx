import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Magix Vegas Creative Suite",
    percentage: "100%",
  },
  {
    id: 2,
    title: "Adobe Photoshop & Illustrator",
    percentage: "100%",
  },
  {
    id: 3,
    title: "Web Design & Development",
    percentage: "85%",
  },
  {
    id: 4,
    title: "Video Production",
    percentage: "100%",
  },
  {
    id: 5,
    title: "Graphic & Digital Art",
    percentage: "100%",
  },
  {
    id: 6,
    title: "Business Management",
    percentage: "90%",
  },
];

const Skills = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap">
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
