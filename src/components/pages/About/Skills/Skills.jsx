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
    title: "Tailwind CSS",
    percentage: "100%",
  },
  {
    id: 4,
    title: "HTML, CSS, JavaScript, jQuery",
    percentage: "95%",
  },
  {
    id: 5,
    title: "Heroku & Firebase Deployment",
    percentage: "90%",
  },
  {
    id: 6,
    title: "Git, GitHub, Version Control",
    percentage: "85%",
  },
  {
    id: 7,
    title: "LuaU",
    percentage: "80%",
  },
  {
    id: 8,
    title: "ReactJS",
    percentage: "70%",
  },
  {
    id: 9,
    title: "PHP",
    percentage: "65%",
  },
  {
    id: 10,
    title: "MongoDB, Realtime Database",
    percentage: "60%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
