import React from "react";

const SoftSkillsItems = (props) => {
  const { title } = props.softskills;
  return (
    <div className="w-full md:w-1/3 flex flex-col">
      <div className="my-2 md:mx-4 shadow rounded-md bg-blue-50 group hover:shadow-md">
        <a className="inline-block rounded-md bg-yellow-50 w-full text-center py-2 px-6 text-gray-500 font-medium">
          {title}
        </a>
      </div>
    </div>
  );
};

export default SoftSkillsItems;
