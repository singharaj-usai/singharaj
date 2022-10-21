import React from "react";
import image1 from '../../../images/R.jfif';
import image2 from '../../../images/Roblox Background.jfif';
import BlogItem from "./BlogItem";
import me from '../../../images/noob.png'
import builderman from '../../../images/builderman.png'

const blogData = [
  {
    id: 2,
    image: image1,
    title: "Should you do a Bootcamp in 2022?",
    description: "My experience as a Bootcamp student and if you should attend one.",
    pic: me,
    name: 'Singharaj Usai',
    date: 'Oct 20, 2022: 1:41 PM',
  },
  {
    id: 1,
    image: image2,
    title: "How to create a successful Roblox game.",
    description: "Everything you need to know to create a successful Roblox experience.",
    pic: builderman,
    name: 'Builderman',
    date: 'Oct 18, 2022: 10:32 AM',
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
