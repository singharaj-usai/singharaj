import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDeviantart,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { SiRoblox, SiYoutube } from "react-icons/si";
import picture from "../../../images/noob.png";
import resume from "../../../Resume/Singharaj_Usai_Resume.pdf";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/singharaj-usai",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/singharaj-usai",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    link: "https://twitter.com/OMrbobbilly",
  },
  {
    id: 4,
    icon: <FaDeviantart />,
    link: "https://deviantart.com/realmrbobbilly",
  },
  {
    id: 5,
    icon: <SiYoutube />,
    link: "https://youtube.com/channel/UCmYWuRWxO-bzZpZ9BqJeNGg",
  },
  {
    id: 6,
    icon: <SiRoblox />,
    link: "https://www.roblox.com/users/446187905/profile",
  },
];

const Card = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={picture} alt="singharaj" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-bold mb-1">
          Singharaj Usai
        </h1>
        <p className="text-sm text-gray-400 mb-3">JavaScript Web Developer</p>

        <div className="m-1 flex justify-center flex-wrap">
          <a
            href={resume}
            className="font-light m-2 inline-block rounded-full bg-blue-500 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-yellow-300 transition ease-out duration-200"
          >
            View Resume
          </a>
          <a
            href={resume}
            className="font-light m-2 inline-block rounded-full bg-blue-500 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-yellow-300 transition ease-out duration-200"
            download="Singharaj_Usai_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>

      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <div className="text-gray-400 font-light leading-relaxed">
          <p className="my-1">
            Hello, my name is <a className="text-blue-500 ">Singharaj Usai</a>,
            welcome to my About Me card!
          </p>
          <p className="my-1">
            Before starting my Web Development journey, I was a{" "}
            <a className="text-blue-500">YouTube</a> and
            <a className="text-yellow-500"> Roblox</a> content creator with over
            7+ years of experience under my belt.
          </p>
          <p className="my-1">
            My adventure has been an exciting journey, and I look forward to
            whatever is ahead!
          </p>
        </div>
      </div>
    </aside>
  );
};

// From our React class notes props
const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        target="_blank"
        href={link}
        className="w-8 h-8 bg-yellow-300 rounded-full text-white flex items-center justify-center  hover:bg-blue-500 transition ease-out duration-200"
      >
        {icon}
      </a>
    </li>
  );
};

export default Card;
