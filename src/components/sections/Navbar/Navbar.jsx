import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Skills from "../../pages/Resume/About";
import Webdev from "../../pages/Portfolio/About";
import GFX from "../../pages/GFX/GFX";
//import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import { FaCode, FaHtml5, FaReact } from "react-icons/fa";
const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Resume",
    to: "/skills",
  },
  {
    id: 3,
    title: "Portfolio",
    to: "/webdev",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="justify-center flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/webdev">
          <Webdev />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="text-lg m-2 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-blue-600"
        className="text-grey-500 hover:text-yellow-300 transition ease-out duration-200">
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
