import React from "react";

const BlogItem = (props) => {
  const { image, title, description, pic, name, date } = props.blog;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
          <img src={image} alt="blogImage" className="w-full h-full object-cover object-center transform group-hover:scale-110 group-hover:rotate-6 transition duration-200" />
        </div>
        <h3>
          <a href="#0" className="block text-lg font-medium text-gray-800 hover:text-blue-300 mb-2 transition ease-out duration-200">
            {title}
          </a>
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
        <div className="flex mt-6 justify-left">
          <div className="w-16 h-16 rounded-md overflow-hidden">
            <img
              src={pic}
              alt="pic"
              className="w-full" />
          </div>
          <div className="mt-4 ml-6">
            <p className="text-gray-500 text-lg font-medium">
              {name}
            </p>
            <p className="text-gray-400 font-medium">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
