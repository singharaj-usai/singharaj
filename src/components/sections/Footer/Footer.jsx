import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Designed and Developed by
          <a
            className="text-blue-600"
            href="https://github.com/singharaj-usai"
            rel="nofollow"
          >
            {" "}
            Singharaj Usai
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
