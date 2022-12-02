import React from "react";

const KnowledgeItems = (props) => {
  const { title } = props.knowledge;
  return (
    <div className="w-full md:w-1/2">
      <div className="my-2 md:mx-4 shadow rounded-md bg-blue-50 group hover:shadow-md">
        <a className="inline-block rounded-md bg-blue-100 w-full text-center py-2 px-6 text-gray-500 font-medium">
          {title}
        </a>
      </div>
    </div>
  );
};

export default KnowledgeItems;
