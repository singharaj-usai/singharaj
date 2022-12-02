import React from "react";
import KnowledgeItems from "./KnowledgeItems";

const knowledgeData = [
  {
    id: 1,
    title: "Content Creations",
  },
  {
    id: 2,
    title: "Personal Branding",
  },
  {
    id: 3,
    title: "HTML, CSS, JavaScript",
  },
  {
    id: 4,
    title: "PHP",
  },
  {
    id: 5,
    title: "jQuery",
  },
  {
    id: 6,
    title: "Bootstrap, Tailwind",
  },
  {
    id: 7,
    title: "Node.js, Express.js",
  },
  {
    id: 8,
    title: "React.js",
  },
  {
    id: 9,
    title: "MVC File Structure",
  },
  {
    id: 10,
    title: "MySQL",
  },
  {
    id: 11,
    title: "MongoDB",
  },
  {
    id: 12,
    title: "Firebase Realtime Database",
  },
  {
    id: 13,
    title: "Python",
  },
  {
    id: 14,
    title: "C#",
  },
  {
    id: 15,
    title: "Java",
  },
  {
    id: 16,
    title: "AWS",
  },
  {
    id: 17,
    title: "RESTful & GraphQL API",
  },
  {
    id: 18,
    title: "Roblox Lua",
  },
  {
    id: 19,
    title: "Git & GitHub",
  },
  {
    id: 20,
    title: "Heroku Deployment",
  },
  {
    id: 21,
    title: "Agile & Scrum Methodology",
  },
  {
    id: 22,
    title: "Webstorm",
  },
  {
    id: 23,
    title: "Photoshop",
  },
  {
    id: 24,
    title: "Sony Vegas Pro",
  },

];

const Knowledges = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap ">
        {knowledgeData.map((knowledge, id) => (
          <KnowledgeItems knowledge={knowledge} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Knowledges;
