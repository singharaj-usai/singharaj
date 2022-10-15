import React from "react";
import image1 from '../../../images/R.jfif';
import BlogItem from "./BlogItem";

const blogData = [
  {
    id: 1,
    image: image1,
    title: "Should you do a Bootcamp in 2022?",
    description:
      "My own experience as a Bootcamp student and if you should attend one, and other information you should know.",
  },


];

const Blog = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-center flex-wrap md:px-4">
        {blogData.map((blog, id) => (
          <BlogItem blog={blog} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
