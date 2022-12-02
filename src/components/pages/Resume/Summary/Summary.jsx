import React from "react";

const Summmary = () => {
  return (
    <section className="flex flex-wrap md:px-4">
      <div className="w-full">
        <div className="md:mx-4">
          {/*
            Just found out how to do JSX comments lol
            Anyways, this About Me below should be a component probably.
            Also remove redundant codes.
            */}
          <div className="text-gray-400 mb-3">
            <p className="m-1 text-center text-lg">
              Fullstack JavaScript Web Developer with background in Graphic
              Design and Social Media Branding. Strong technical proficiency
              with work history in Content Creations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summmary;
