import React from "react";

const EducationItem = (props) => {
  const { link, button, title, description, name, date } = props.education;
  return (
    <div className="w-full xl:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-blue-50 group hover:shadow-md">
        <div className="flex  justify-left">
          <div className="rounded-md ">
            <p className="text-gray-400 text-sm font-medium">{date}</p>
            <p className="text-gray-500 text-xl font-light">{name}</p>
          </div>
        </div>

        <h3>
          <a
            target="_blank"
            href={link}
            className="block text-lg font-medium text-gray-600 hover:text-blue-300 mb-2 transition ease-out duration-200"
          >
            {title}
          </a>
        </h3>
        <p className="text-sm text-gray-400">{description}</p>
        <a
          target="_blank"
          href={link}
          className="inline-block mt-4 rounded-full bg-blue-500 w-full text-center py-2 px-6 text-white  tracking-wide hover:bg-yellow-300 transition ease-out duration-200"
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default EducationItem;
