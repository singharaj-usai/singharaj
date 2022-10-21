import React from "react";
import image1 from "../../../images/web api code quiz.png";
import image2 from "../../../images/pwa text editor.png";
import image3 from "../../../images/express note taker.png";
import image4 from "../../../images/node readme generator.jpg";
import image5 from "../../../images/js calculator.png";
import image6 from "../../../images/js password gen.png";
import WebdevItem from "./WebdevItem";

const portfolioData = [
  {
    id: 1,
    
    image: image1,
    title: "JavaScript Code Quiz",
    link: "https://github.com/singharaj-usai/Web-API-Code-Quiz",
    description: "A JavaScript code quiz using the default browser's API.",
  },
  {
    id: 2,
    image: image2,
    title: "PWA Text Editor",
    link: "https://github.com/singharaj-usai/PWA-Text-Editor",
    description: "A Progressive Web App text editor that runs on the browser and works offline.",
  },
  {
    id: 3,
    image: image3,
    title: "Express.JS Note Taker",
    link: "https://github.com/singharaj-usai/Express-Note-Taker",
    description: "A note taker powered by Express.",
  },
  {
    id: 4,
    image: image4,
    title: "Node.JS Readme Generator",
    link: "https://github.com/singharaj-usai/Readme-Generator",
    description: "A Readme generator powered by Node.js.",
  },
  {
    id: 5,
    image: image5,
    title: "Calculator",
    link: "https://github.com/singharaj-usai/Javascript-Calculator",
    description: "A simple static calculator that is powered by Javascript using key inputs.",
  },
  {
    id: 6,
    image: image6,
    title: "Password Generator",
    link: "https://github.com/singharaj-usai/Javascript-Password-Generator",
    description: "A randomly generated password generator with prompt inputs.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <WebdevItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
